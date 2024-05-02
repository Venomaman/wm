import { AuthSignin } from "../components/AuthSignin"
import { Quote } from "../components/Quote"

export const Signin=()=>{
    return <div className="grid grid-cols-2">
        <div className="flex justify-center flex-col">
        <AuthSignin/>
        </div>
        <Quote/>
    </div>
}