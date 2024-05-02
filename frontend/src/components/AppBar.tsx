import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


export const AppBar=()=>{ 
    return <div className="shadow p-4 grid grid-cols-2 bg-gray-50">
        <Link to={"/"}>
        <div className="font-semibold text-slate-700 flex col-span-1 flex-col justify-center pl-6 cursor-pointer pt-2">
           W-Medium
        </div>
        </Link>
        <div className="flex col-span-1 text-slate-700 justify-end pr-6">
            <div className="pr-6 pt-1">
                <Link to={"/publish"}>
                   <button type="button" className="hover:bg-green-600 focus:ring-2 focus:ring-green-400 bg-slate-600 text-slate-50 text-xs px-5 py-2 font-sans rounded-2xl text-center">Write</button>
                </Link>
            </div>
            <Avatar size="big" name=""/>
        </div>
    
    </div>
    
}