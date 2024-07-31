import React from 'react';
import infoImg from "../assets/abouts.jpeg";
import medicine from "../assets/medicine.jpg";
import medi from "../assets/medicine2.jpeg";
import test from "../assets/ut.jpeg";

const Home = () => {
    return (
        <div className=' h-fit min-h-screen w-fit'>
            <div className='front w-full top-5  relative z-40 p-72'>
                <p className=' absolute shadow-xl shadow-slate-800 top-60 lg:top-72 p-8 left-0 lg:right-96 rounded-br-full z-0 bg-slate-300'><p className='fronttext text-slate-900 font-bold w-11/12 text-sm md:text-2xl sm:text-lg text-wrap'>Welcome to Evaluxe Pharmaceuticals, Empowering Health, Enriching Lives</p></p></div>
            <div className=' lg:w-full w-full flex flex-col lg:flex-row relative pt-14 p-7 pb-14 bg-slate-700 '>
                <p className=' z-40 text-opacity-80 rounded-full p-14 bg-slate-700 text-white text-3xl w-full lg:w-1/2 lg:absolute'>At Evaluxe Pharmaceuticals, we are driven by a profound commitment to
                    pioneering breakthrough medicines that significantly improve the lives of
                    patients worldwide. Through relentless scientific innovation and a steadfast
                    dedication to enhancing healthcare outcomes, we aim to address unmet medical
                    needs and elevate the standard of patient care globally.
                </p>
                <img className=' shadow-slate-200  shadow-2xl z-0 w-full lg:w-2/3 lg:left-96  top-0 relative rounded-md' src={infoImg} alt='info' />
            </div>
            <div className=' w-full h-fit p-4 pt-10'>
                <h2 className=' text-5xl text-left font-semibold  pl-28 text-slate-950 underline underline-offset-8'>Our Mission</h2>
                <div className=' w-full pt-12 flex lg:flex-row flex-col-reverse lg:pl-28 gap-12'>
                    <p className=' w-full text-2xl lg:w-3/6 text-blue-950 '>Our mission at Evaluxe Pharmaceuticals is clear:
                        to<span className=' text-3xl font-bold text-slate-700'> discover, develop, and deliver innovative Medicines </span>
                        that make a meaningful difference in the treatment of
                        diseases. We are dedicated to pushing the boundaries of
                        medical research and translating our discoveries into impactful
                        therapies that empower patients to live healthier, fuller lives.
                    </p>
                    <img src={medicine} className=' medi lg:w-5/12 w-full lg:h-full' />
                </div>
            </div>
            <div className=' pt-10 w-full h-fit'>
                <h2 className=' text-4xl lg:text-center text-left pb-10 font-semibold  pl-28 text-slate-950 underline underline-offset-8'>Commitment to Scientific Excellence</h2>
                <div className=' w-full h-5/6 flex-col flex lg:flex-row md:flex-row items-center justify-around lg:gap-5 p-5'>
                    <div className=' w-full lg:w-4/12 border-2 border-zinc-950 p-4 rounded-3xl '>
                        <img src={test} />
                        <img src={medi} />
                    </div>
                    <p className='mt-8 lg:mt-0 lg:w-96 text-2xl text-blue-950'>
                        At the heart of Evaluxe Pharmaceuticals lies a 
                        commitment to scientific excellence and integrity. 
                        We uphold rigorous standards in research, development, 
                        and manufacturing to ensure the safety, efficacy, and quality 
                        of our products. By prioritizing patient safety and wellbeing, 
                        we earn the trust of healthcare professionals and patients alike.
                    </p>
                </div>

                <h1 className=' text-6xl text-pretty pl-28 pt-20 pb-4 font-mono italic text-red-950'>Trusted by</h1>
                <p className='trust text-4xl text-center pb-10 font-mono italic text-orange-800'>600 + doctors and 10000+ patients</p>
            </div>
        </div>
    );
}

export default Home;
