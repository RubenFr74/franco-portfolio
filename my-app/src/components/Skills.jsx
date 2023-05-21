import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#023262] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] max-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#f99709]'>Experience</p>
                <p>// These are the technology I'm experienced with.</p>
            </div>

            <div>
                <div>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills