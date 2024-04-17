import Blogs from "./Components/Blogs";
import Hero from "./Components/Hero";
import Search from "./Components/Search";
import Subscribe from "./Components/Subscribe";


export default function Home() {
  return (
    <>
     <Hero /> 
     <Blogs />
     <Search />
     <Subscribe />
    </>
  );
}