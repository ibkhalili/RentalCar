import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export function NavSide() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div>
        <Navbar toggle={toggle} />
        <br></br>
        <br></br>
        <br></br>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      </div>
    )
  }
  