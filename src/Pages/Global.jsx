import React from 'react'

const Global = () => {
  return (
    <div className='mainn min-h-screen max-w-full border-2 border-amber-500 h-fit flex relative top-24'>
      <h2 className=" text-7xl p-4 text-white">Global Reach</h2>
      <div className=" flex text-white items-center justify-center relative">
        <h1 className=' absolute text-3xl top-16 border-2 border-slate-100'>Headquartered in <span>Mumbai</span ></h1>
        <p className="par w-72 text-slate-950 bg-slate-400 p-10"> Evaluxe Pharmaceuticals operates globally to ensure our medicines<br />
          reach patients in need around the world.<br />
          With a diverse and talented team of professionals,
          <br /> we collaborate across borders to drive innovation <br />
          and make a positive impact on global health.
        </p>
      </div>
    </div>
  )
}

export default Global