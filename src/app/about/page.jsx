
"use client"
import React from 'react'

import Image from 'next/image'

import Link from 'next/link';

import Smile from "/public/kabboSmile.jpg";
import "../globals.css";

import { TiTick } from "react-icons/ti";

const page = () => {
  return (
    <div>

    <div style={{display:"flex", flexDirection:"row"}}>

      <div style={{flex:1, padding:"5px"}}>

        <Image src={Smile} alt=" " style={{height:"200px", width:"250px", border:"1px solid gray" , borderRadius:" 25px"  }} className='Port-Image'/> <br/> <br/> 

        <button style={{border:"1px solid black", margin:"20px", borderRadius:"8px",  height:"30px", width:"200px"}}> <Link href="/education" className="none"> Education Background  </Link> </button>



      </div>

      <div className="homeLine"></div>

      <div style={{flex:1, padding:"5px"}}>

        <h2> Hey, I'm Kawshik Rahman Kabbo    </h2> 
        <p> I'm a Full stack web developer near Dhaka. With a strong foundation in both front-end and back-end development, I specialize in crafting dynamic and user-centric web solutions.
       Having honed my skills through hands-on experience and ongoing learning, I thrive on bringing digital visions to life.
       Whether it's building responsive websites, developing robust APIs, or optimizing database performance, I'm committed to delivering high-quality, scalable solutions.    </p> <br/>

       <h3 style={{marginLeft:"50px"}}>Why work with me ? </h3>
       <ul>
       <li style={{ display: 'flex', alignItems: 'center' }}>
            <TiTick style={{ marginRight: '8px' , fontSize: '25px' }} />
            <h4>Strong Interpersonal Skills</h4>
          </li>

          <li style={{ display: 'flex', alignItems: 'center' }}>
            <TiTick style={{ marginRight: '8px' , fontSize: '25px' }} />
            <h4>Clear Communicator</h4>
          </li>

          <li style={{ display: 'flex', alignItems: 'center' }}>
            <TiTick style={{ marginRight: '8px' , fontSize: '25px' }} />
            <h4>Analytical</h4>
          </li>

          <li style={{ display: 'flex', alignItems: 'center' }}>
            <TiTick style={{ marginRight: '8px', fontSize: '25px'}} />
            <h4>Result Driven And Deadline Conscious.</h4>
          </li>
       </ul>





      </div>


    </div>

  
    
    </div>
  )
}

export default page
