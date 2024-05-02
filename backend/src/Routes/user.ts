import { Hono } from "hono";

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import {signinInput, signupInput} from '@venomamank/common'


export const userRouter = new Hono<
{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    }
}>();

//SIGNUP routes......

userRouter.post('/signup', async(c) => {
   
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
 
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  
  //zod , hashed pass 
  
  if(!success){
    c.status(411);
    return c.json({
      msg:"input not correct"
    })
  }
  try{
  const user =  await prisma.user.create({
      data:{
        username:body.username,
        password:body.password,
        name:body.name
      }
    })
    const jwt = await sign({
      id: user.id
    },c.env.JWT_SECRET)
      return c.text(jwt)
  
    }catch(e){
      c.status(411);
      return c.text('user already exist/ Invalid!')
    }
    })
  
  
  //SIGNIN Routes.....
  
  userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  
  const body = await c.req.json();
  
  //zod , hashed pass 
  const {success} = signinInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      msg:"input not correct"
    })
  }
  
  try{
  const user =  await prisma.user.findFirst({
      where:{
        username:body.username,
        password:body.password,
      }
    })
  
    if(!user){
      c.status(403);
      return c.text('Unauthorized!/ Invalid_Creds!')
    }
    const jwt = await sign({
      id: user.id
    },c.env.JWT_SECRET)
      return c.text(jwt)
  
    }catch(e){
      c.status(411);
      return c.text('Invalid!')
    }
  })