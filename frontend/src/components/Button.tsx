
interface ButtonLable{
    label: string;

}

export function Button({label}:ButtonLable){
    return<div>
        <button type="button"  className =" w-32 text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
    </div>
}