import {  Copyright, Mail, MapPin, Phone } from 'lucide-react';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SERVICE_LINKS, SOCIALS } from '../Constant';
import Image from "next/image"
import Link from "next/link"



const Footer = () => {
  return (
    <footer className="flex-center  bg-blue-950  p-10">
      <div className="padding-container max-container flex w-full flex-col gap-14">
      <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
      <Link href="/">
       <h4 className=" text-2xl font-semibold  mb-2  ">
        Ra<span className="text-yellow-500">link.</span>
       </h4>
       <div>
        <div className='flex flex-row '>
       <MapPin  size={20} className="text-white  mb-3 mr-2"/> 
       <span className='text-white'> Saptakhel, Lalitpur (Head office)</span>
       </div>
       <div className='flex flex-row'>
       <Phone size={20} className="text-white mb-3 mr-2" />
       <span className='text-white'>+ 977 9851353599</span>
       </div>
       <div className='flex flex-row'>
       <Mail size={20} className="text-white mb-3 mr-2" />
       <span className='text-white'>info@metalogic.com.np</span>
       </div>
       </div>
         </Link>
         <div className="flex flex-wrap  gap-10 sm:justify-end   md:flex-1  text-white">
            {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title} key={columns.title}>
                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                        {columns.links.map((link) => (
                            <li key={link}>
                                <Link href="/">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </FooterColumn>
            ))}
          <div className=' '>
            {SERVICE_LINKS.map((service)=>(
              <div className="hidden md:flex flex-col gap-5">
              <FooterColumn title={service.title} key={service.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                        {service.links.map((link) => (
                            <li key={link}>
                                <Link href="/">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
              </FooterColumn>
              </div>
            ))}
          </div>
        <div className=" flex flex-col gap-5 ">
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
             {FOOTER_CONTACT_INFO.links.map((link)=>(
              <Link
              href='/'
              key={link}
              className="flex gap-4 md:flex-col lg:flex-row"
              >
                <p className=" whitespace-nowrap ">
                  {link}:
                </p>
                
              </Link>
             ))} 
          </FooterColumn>
        </div>
        <div className="flex flex-col gap-5  ">
              <FooterColumn title={SOCIALS.title}>
            <ul className="regular-14 flex gap-4 text-gray-30  ">
            {SOCIALS.links.map((link)=>(
              <div className='border-2 border-red-200 p-[5px] rounded-full bg-white  '>
              <Link href='/'
              key={link}>
              <Image 
              src={link}
              alt="logo"
              width={21}
              height={21}
              />
              
              </Link>
              </div>
            ))}
            </ul> 
            </FooterColumn>
        </div>
        </div>
            
      </div>
      <div />
      <div className='flex flex-row justify-between'>
  <div className='flex items-center'>
    <Copyright className='text-white' />
    <p className="regular-14 text-white ml-2">2024 Ralink all right reserved</p>
  </div>
</div>

      </div>

      
    </footer>
  )
}

type FooterColumnProps={
  title:string;
  children:React.ReactNode;
}


const FooterColumn=({title,children}:FooterColumnProps)=>{
  return(
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )

}

export default Footer
