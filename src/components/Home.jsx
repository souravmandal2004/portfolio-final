import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
function Home() {
  return (

    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-pink-600 mb-2'>Hi, my name is</p>

        <h1 className='text-4xl sm:text-7xl mb-2 font-bold text-[#ccd6f6]'>Sourav Mandal</h1>

        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>Software Engineer & Web Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] mt-4'>
        Passionate about creating innovative solutions and enhancing user experiences, I am a seasoned Software Engineer and Web Developer with a keen eye for detail and a love for problem-solving. My journey in the world of technology began with a fascination for coding, and it has evolved into a dynamic career where I strive to merge creativity with functionality.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home