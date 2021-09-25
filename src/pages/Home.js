

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sections from '../components/Sections';


function Home() {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
    setIsOpen(!isOpen);
};
    return (
        <div>
          <Sections/>
          <div>
              <p>ffffffffffffffffffff</p>
          </div>
        </div>
    )
}

export default Home;
;