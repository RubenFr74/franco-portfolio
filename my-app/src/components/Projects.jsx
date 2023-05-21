import React from 'react'

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
            <div>
                <div>
                    <div>
                        <span>

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