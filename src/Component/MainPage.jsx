import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About';
import Product from '../Pages/Product';
import Trusted from '../Pages/Trusted';
import Contact from '../Pages/Contact';
import Global from '../Pages/Global';
import Footer from './Footer'

const MainPage = () => {
    const [tab, setTab] = useState("home");

    const setdisplaytab = (e) => {
        setTab(e);
    }

    return (
        <div className=' w-screen min-w-full max-w-screen-lg '>
            <Navbar sendtab={setdisplaytab} />
            <div>
                {
                    tab === "Global" ? <Global />  :
                        tab === "About" ? <About /> :
                            tab === "products" ? <Product /> :
                                tab === "trusted" ? <Trusted /> :
                                tab === "contact" ? < Contact /> : <Home />
                }
            </div>
            <Footer />
        </div>
    )
}

export default MainPage