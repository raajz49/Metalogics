
import { SearchBar2 } from './Searchbar'
import Button from './Button'

const Subscribe = () => {
  return (
    <section className='flex flex-col items-center justify-center lg:py-6 xl:flex-row bg-gray-300 mt-10'>
      <div className='flex flex-col items-center justify-center h-[12rem] sm:h-[15rem]'>
        <div className='text-center '>
          <p className='text-gray-500 font-sans text-2xl font-semibold'>Subscribe to our News Letters</p>
          <p className='text-gray-500 text-lg font-sans font-normal mt-5'>Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
          <div className='flex flex-row justify-center items-center mt-5'>
            <SearchBar2 />
            <Button 
        type="button"
        title="Subscribe"
        variant="btn_red "
        icon='mail.svg'
        />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
