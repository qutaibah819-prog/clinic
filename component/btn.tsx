
import { twMerge } from "tailwind-merge"


const Button=({icon,text,className}:{icon?:React.ReactNode,text:string,className?:string})=>{

    const defaultClass='flex cursor-pointer bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] text-white text-sm font-medium px-4 py-2 rounded-[30px] hover:bg-gradient-to-l hover:from-[#3A8EF6] hover:to-[#6F3AFA] transition duration-300 ease-in-out'
    return(
<button className={twMerge(defaultClass,className)}>
                {icon&&icon}
                <p>
 {text}
                </p>
               
                </button>
    )
}

export default Button

