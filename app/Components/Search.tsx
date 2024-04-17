import React from 'react';
import { NEWS_URL } from '../Constant';
import Image from 'next/image';
import { Book, Calendar, Eye, MessageCircle } from 'lucide-react';
import SearchBar from './Searchbar';
import Button from './Button';

const Search = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      
      {/* Search bar */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Buttons */}
      
<div className="lg:flexCenter hidden mx-auto font-sans ">
         <Button 
         type="button"
         title="All"
         variant="btn_dark_green"
         />
         <Button 
         type="button"
         title="Technology"
         variant="btn_dark_green"
         />
         <Button 
         type="button"
         title="Business"
         variant="btn_dark_green"
         />
         <Button 
         type="button"
         title="Marketing"
         variant="btn_dark_green"
         />
</div>
      {/* News grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 mr-20 gap-8">
        {NEWS_URL.map((news) => (
          <News
            key={news.title}
            title={news.title}
            photo={news.photo}
            time={news.time}
            date={news.date}
            views={news.views}
            comments={news.comments}
          />
        ))}
      </div>
    </div>
  );
};

type News = {
  title: string;
  photo: string;
  date:string;
  time:string;
  views:string;
  comments:string;
};

const News = ({ title, photo ,date,time,views,comments}: News) => {
  return (
     
    <div className="bg-white rounded-lg  mt-20  lg:p-6 flex flex-col items-center justify-center text-center relative">
     <div className='overflow-hidden rounded-2xl  bg-green-500  h-[13rem] '>
      <Image src={photo} alt="news" width={700} height={300} className=" h-[13rem] w-[27rem]  rounded-2xl
       hover:scale-125  transition duration-300 object-cover" />
     </div>
      <div className="flex flex-row mt-3 space-x-5 ">
        <div className='flex flex-row '>
        <Book size={24} className="text-gray-500" />
        
        <span className='text-gray-700' >{date}</span>
        </div>
        <div className='flex flex-row'>
        <Calendar size={24} className="text-gray-500" />
        <span className='text-gray-700'>{time}</span>
        </div>
        <div className='flex flex-row'>
        <Eye size={24} className="text-gray-500" />
        <span className='text-gray-700'>{views}</span>
        </div>
        <div className='flex flex-row'>
        <MessageCircle size={24} className="text-gray-500" />
        <span className='text-gray-700'>{comments}</span>
        </div>
      </div>'
    <div className='mr-1 w-[18rem] lg:w-[25rem]'>
      <h2 className='text-blue-950 font-sans regular-18 '>{title}</h2>
      </div>
    </div>
  );
};

export default Search;
