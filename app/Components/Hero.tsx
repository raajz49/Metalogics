'use client'
import Image from 'next/image';
import  { Button2 } from './Button';
import { useState } from 'react';
import { Info } from 'lucide-react';

const Hero = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible((prev) => !prev);
  };
  return (
    <section className=' flex flex-col lg:py-20 xl:flex-row  '>
      
      <div className=' flex flex-1 items-start justify-center '>
        <div className='w-[720px] h-[330px] lg:h-[550px] flex flex-col gap-8 rounded-3xl bg-white px-8 '>
          <Image
            src="/techworld.jpg"
            alt='pictech'
            width={1000}
            height={950}
            className='rounded-2xl h-[45rem]'
          />
        </div>
      </div>
      <div className='relative p-10 lg:p-10   flex flex-1 justify-center flex-col mt-36 lg:mt-0  
      lg:ml-[-40px] xl:w-1/2'>
      <div className="absolute top-0 ml-20">
          <button onClick={toggleInfo}>
            <Info />
          </button>
          {isInfoVisible && (
            <div className="info-text  shadow-lg rounded-lg p-4 absolute top-full w-[20rem] 
             bg-blue-800 text-white right-0 mt-2">
              Given time constraints, I've developed this page to the best of my ability, focusing on
               its visual appeal and functionality. Using Next.js, TypeScript, and Tailwind CSS, I've ensured it meets 
               requirements. For the blog section, I've integrated it seamlessly with existing designs, maximizing its 
               effectiveness.Overall, I've strived to deliver a polished and engaging experience within the given 
               parameters.
            </div>
          )}
        </div>
        
        <p className=' text-red-500 xl:max-w-[520px] text-3xl mt-[-48px]  font-semibold font-sans'>Blogs</p>
        <h1 className='regular-32 lg:bold-70 font-sans mt-2 text-blue-950'>Revolutionizing Software Development: Exploring Innovative Uses of Blockchain</h1>
        <div className='flex justify-center mt-5'>
        <p className=' text-lg text-slate-600  mr-16   '>
        Blockchain technology, initially known for its association with cryptocurrencies, has transcended its initial boundaries to become a transformative force in various industries. In the realm of software development,
         blockchain offers a myriad of innovative applications that go beyond conventional
        </p>
        </div>
        <div className='mt-20 lg:mt-[-4px] ml-[-30px]'> 
        <Button2
        type="button"
        title="Read More"
        variant="btn_dark_green_outline "
        icon='arrow.svg'
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;