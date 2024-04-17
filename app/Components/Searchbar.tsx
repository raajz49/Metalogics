import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from './Button';

const SearchBar = () => {
  return (
    <div className="relative">
      <InputBase
        placeholder="Search..."
        className="search-input border-2 border-gray-400 w-[40rem] h-12 text-2xl rounded-lg pl-12"
        startAdornment={
          <SearchIcon className="absolute top-0 left-0 w-8 h-8 m-2 text-gray-500" />
        }
      />
    </div>
  );
};

export const SearchBar2=()=>{
  return(
    <div className="relative">
    <InputBase
      placeholder="Please Enter your Email"
      className="search-input  font-sans  bg-gray-200 w-[40rem] h-14 text-lg rounded-lg pl-12"
      
      />
  </div>
  )
}

export default SearchBar;
