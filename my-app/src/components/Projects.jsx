import React from 'react'
import MoonDollars from '../assets/moon-dollars.jpg'
import Sherpa from '../assets/sherpa.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#023262]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f99709]'>Projects</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            {/* Grid Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                    // key={index}
                    style={{ backgroundImage: `url(${MoonDollars})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover Effects */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects