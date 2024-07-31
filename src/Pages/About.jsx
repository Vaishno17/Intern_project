import React, { useState } from 'react';
import "./About.css";
import ProCard from './ProCard';
// import immg from "../assets/bottelimg.jpeg";

const arr = [
  {
    title: "Colombia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    img: "../assets/bottelimg.jpeg"

  },
  {
    title: "Colombia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    img: "https://i.imgur.com/QYWAcXk.jpeg"
  },
  {
    title: "Colombia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    img: "../assets/bottelimg.jpeg"
  },
  {
    title: "Colombia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    img: "../assets/bottelimg.jpeg"
  },
  {
    title: "Colombia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.",
    img: "../assets/bottelimg.jpeg"
  },

]

const About = () => {
  const [data, setData] = useState([arr]);

  return (
    <div className='body h-fit min-h-screen gap-4 relative top-28 mb-28 flex flex-wrap items-center justify-around'>
     {
      data.map((item,idx)=>{
        // console.log(item, idx) 
        return  <><ProCard key={idx} allitem={item}/></>
      })
     }
    </div>
  )
}

export default About