
import { AuthSignup } from "../components/AuthSignup"
// import { InputLabel } from "../components/InputLabel"
import { Quote } from "../components/Quote"

export const Signup=()=>{
    return <div>
        <div className="grid grid-cols-2">
            <div className="flex justify-center flex-col">
                <AuthSignup/>
            </div>
           
            <div>
              <Quote/>
            </div>
        </div>
        
     
    </div>
}