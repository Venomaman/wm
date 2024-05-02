import { Avatar } from "./BlogCard"

interface type{
    desc:string,
    name:string
} 

export const TrandingCard=({desc, name}:type)=>{
    return <div>
        <div className="pl-4 flex">
            <Avatar name={name} size="small" />
            <div className="pl-4 text-slate-500">{name}</div>
          </div>
          <div className="pl-4 pt-3 text-slate-500 text-sm">
             {desc}
          </div>
    </div>
}