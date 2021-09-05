

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sections from '../components/Sections';
import Sidebar from '../components/Sidebar'


function Home() {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
    setIsOpen(!isOpen);
};
    return (
        <div>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <Sections/>
        </div>
    )
}

export default Home;
;