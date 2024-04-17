import React from 'react';

const Blogs = () => {
  return (
    <section className='flex flex-col  p-8  lg:py-36 xl:flex-row  bg-blue-950'>
      <div className='h-full flex justify-center item-center '>
        <div className='text-center'>
          <p className='text-white font-sans text-base mb-5 lg:text-xl font-semibold   '>OUR BLOGS</p>
          <h1 className='text-white font-sans text-3xl lg:text-5xl font-bold  mb-3 lg:mb-10'>All Blog Posts</h1>
       
          <p className='text-white text-sm   lg:text-base lg:font-normal font-sans lg:px-10 lg:mt-5  '>
            Here, creativity knows no bounds, and innovation takes center stage. Whether you're an industry expert, a curious learner, or an aspiring entrepreneur,
            this is the place where ideas come to life, insights are shared, and knowledge is transformed into action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
