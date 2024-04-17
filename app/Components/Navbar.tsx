import { NAV_LINKS } from "../Constant"


import Link from "next/link"



const Navbar = () => {
  return (
    <nav className="flex sticky top-0 bg-white  justify-between items-center  padding-container z-10 py-5  ">
      <Link href="/">
       {/* <Image 
       src="/meta.png"
       alt="logo"
       width={74}
       height={29}
       className="w-[15rem]"/> */}
       <h4 className=" text-2xl font-semibold ml-20  ">
        Ra<span className="text-yellow-500">link.</span>
       </h4>
         </Link>
       <ul className="hidden h-full gap-12   lg:flex">
        {NAV_LINKS.map((link)=>(
          <Link href={link.href}
          key={link.key}
          className=" text-xl font-sans  bg-white   text-black font-semibold  flex justify-center items-center 
           cursor-pointer  transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
       </ul>
       <div className="lg:flexEnd hidden   ">
        <button className="bg-red-600 px-6 py-2 rounded-lg ml-5 text-white text-xl  font-sans">
            Get in Touch
        </button>

       </div>
    </nav>
  )
}

export default Navbar
