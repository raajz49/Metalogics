import { Mail, MoveRight } from 'lucide-react'

type ButtonProps={
    type:'button'|'submit',
    title:string,
    variant:string,
    full?:boolean,
    icon?:string,
   
}
const Button = ({type,title,variant,icon,full}:ButtonProps) => {
  return (
    <button
    type={type}
    className={`text-2xl flexCenter gap-3 rounded-2xl border ${variant} ${full && 'w-full'}`}
    >
       
    {icon && <Mail /> } 
    <label className='text-xl font-sans whitespace-nowrap cursor-pointer'>{title}</label>
   
    </button>
  )
}

 export const Button2 = ({type,title,variant,icon,full}:ButtonProps) => {
  return (
    <button
    type={type}
    className={`text-2xl flexCenter gap-3 rounded-2xl border ${variant} ${full && 'w-full'}`}
    >
     {icon && <MoveRight/> } 
   <label className='text-xl font-sans whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button
