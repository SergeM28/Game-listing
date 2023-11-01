import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from 'react-icons/hi2'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex items-center p-3">
            <img src={logo} width={60} height={60}/>
            <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
                <HiOutlineMagnifyingGlass/>
                <input type="text" placeholder="Search Games" className="px-2 bg-transparent outline-none"/>
            </div>
            <div>
                {toggle ? <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={() => setToggle(!toggle)}/> : <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={() => setToggle(!toggle)}/>}
            </div>
        </div>
    )
}

export default Header