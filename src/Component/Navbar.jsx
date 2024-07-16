import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.jpg";

const Navbar = (props) => {
    const [searchtb, setSearchTab] = useState(false);
    console.log(props.sendtab);

    const SerachFn = () => {
        setSearchTab(prev => !prev)
    }

    return (
        <div className=' fixed z-50 w-full h-24 bg-white shadow-md shadow-slate-200 rounded-md  flex items-center justify-between px-20'>
            <div onClick={()=> props.sendtab("home")} className=' cursor-pointer w-1/12 '>
               <img src={logo} className=' w-11/12' />
            </div>
            <div className=' flex w-7/12 items-center justify-between '>
                {
                    searchtb ?
                        <div className=' w-full gap-4 flex'>
                            <input type='search' placeholder=' Search here...' className=' p-2 bg-slate-100 border-2 border-black w-8/12 h-10 rounded-md'/> 
                            <button className=' bg-emerald-500 pl-3 pr-3 rounded-lg text-lg text-neutral-50'>Search</button>
                        </div>
                        : <div className=' flex w-10/12 items-center p-2 justify-between '>
                            <a href="#" onClick={()=> props.sendtab("About")}  className="tab text-lg font-semibold hover:text-green-500  hover:underline underline-offset-8">About Us</a>
                            <a href="#" onClick={()=> props.sendtab("products")} className="tab text-lg font-semibold hover:text-green-500 hover:underline underline-offset-8">Products</a>
                            <a href="#" onClick={()=> props.sendtab("trusted")} className="tab text-lg font-semibold hover:text-green-500 hover:underline underline-offset-8">Trusted By</a>
                            <a href="#" onClick={()=> props.sendtab("Global")} className="tab text-lg font-semibold hover:text-green-500 hover:underline underline-offset-8">Global Reach</a>
                            <a href="#" onClick={()=> props.sendtab("contact")} className="tab text-lg font-semibold hover:text-green-500 hover:underline underline-offset-8">Contact Us</a>
                        </div>
                }

                <div className=' cursor-pointer font-semibold text-2xl text-cyan-700' onClick={SerachFn}>
                    {
                        searchtb === true ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-magnifying-glass"></i>
                    }
                </div>


            </div>
        </div>
    )
}

export default Navbar