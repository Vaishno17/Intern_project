import React from 'react'
// import { useState } from 'react'
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const [searchtb, setSearchTab] = useState(false);
    // const [list, setList] = useState(true);
    // console.log(props.sendtab);

    // const SerachFn = () => {
    //     setSearchTab(prev => !prev)
    // }

    const ShowOption = () => {

    }

    return (
        <div className=' fixed z-50 w-full h-24 bg-white shadow-md shadow-slate-200 rounded-md  flex items-center justify-between px-20'>
            <Link to='/' className='w-1/12'>
                <div className=' cursor-pointer '>
                    <img src={logo} className=' w-11/12' />
                </div>
            </Link>
            <div className=' flex w-7/12 items-center justify-between '>
                {
                    // searchtb ?
                    //     <div className=' w-full gap-4 flex'>
                    //         <input type='search' placeholder=' Search here...' className=' p-2 bg-slate-100 border-2 border-black w-8/12 h-10 rounded-md'/> 
                    //         <button className=' bg-emerald-500 pl-3 pr-3 rounded-lg text-lg text-neutral-50'>Search</button>
                    //     </div>:
                    <div className=' hidden lg:flex w-10/12 items-center p-2 justify-between '>
                        <Link to='/About' className="tab text-lg font-semibold hover:text-green-500  hover:underline underline-offset-8">About Us</Link>
                        <Link to='/Product' className="tab text-lg font-semibold hover:text-green-500 hover:underline underline-offset-8">Products</Link>
                        <Link to='/Trusted' className="tab text-lg font-semibold hover:text-green-500 hover:underline underline-offset-8">Trusted By</Link>
                        <Link to='/Contact' className="tab text-lg font-semibold hover:text-green-500 hover:underline underline-offset-8">Contact Us</Link>
                    </div>
                }

                <div onClick={ShowOption} className='flex lg:hidden'>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div>

                </div>

                <Link to='/Signin' className=' cursor-pointer lg:ml-10 font-semibold text-2xl flex items-center justify-center gap-2 hover:border-b-2 hover:border-gray-950'>
                    <i class="fa-solid fa-user"></i>
                    <div>SignIn</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar