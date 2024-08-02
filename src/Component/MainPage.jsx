import React, { useState } from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';             
import Footer from './Footer'

const MainPage = () => {
    // const [tab, setTab] = useState("home");

    // const setdisplaytab = (e) => {
    //     setTab(e);
    // }

    return (
        <div className=' w-screen min-w-full max-w-screen-lg '>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainPage