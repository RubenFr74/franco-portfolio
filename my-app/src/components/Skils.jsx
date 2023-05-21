import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skils = () => {
  return (
    <div name='skills'>
        {/* Container */}
        <div>
            <div>
                <p>Experience</p>
                <p>// These are the technology I'm experienced with</p>
            </div>

            <div>
                <div>
                    <img src={HTML} alt='HTML icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skils