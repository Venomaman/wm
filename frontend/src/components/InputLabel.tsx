import { ChangeEvent } from "react"

interface LabelType{
    label: string;
    placeholder: string;
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
    type?: string;
}

export function InputLabel({label, placeholder, type, onChange}:LabelType ){
    return<div>
        <div className="text-left text-md py-2 font-medium">
            {label}
        </div>
        <input onChange={onChange} type={type || "text"} placeholder= {placeholder} className="text-sm h-10 w-full px-2 py-1 border rounded border-slate-400"/>

    </div>
}