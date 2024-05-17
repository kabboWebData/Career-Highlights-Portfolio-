"use client"

import React from 'react';
import formal from "/public/formal.jpg";
import Image from 'next/image';
import Link from 'next/link';

import "../globals.css";

const Page = () => {

  const downloadCV = () => {
    // Assuming your CV file is named "cv.pdf" and located in the public folder
    const cvUrl = '/Kawshik Rahman Kabbo CV.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Kawshik Rahman Kabbo CV.pdf');

    // Simulate click to trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
  };

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>

        <div style={{flex:1, padding:"15px"}}>
          <Image src={formal} alt="" className='Port-Image' style={{height:"250px", width:"300px", margin:"20px", padding:"20px",   borderRadius:"50% / 60%", overflow: "hidden" }} />
        </div>

        <div style={{flex:1, padding:"15px"}}>
          <h1>Kawshik Rahman Kabbo</h1>
          <h3>Web Developer</h3>
          <p>Hello! I am Kawshik Rahman Kabbo, a professional and passionate programmer in my daily life.
             A quick learner with a self-learning attitude.
             I love to learn and explore new technologies and am passionate about problem-solving.</p><br/>

          
           <div style={{display: "flex", flexDirection:"row"}}> 
          <button onClick={downloadCV} style={{border:"1px solid black", borderRadius:"8px", height:"30px", width:"120px", margin:"20px"}} >
            Download CV
          </button>

          <button style={{border:"1px solid black", margin:"20px", borderRadius:"8px",  height:"30px", width:"100px"}}> <Link href="/contact" className="none"> Contact  </Link> </button>


          </div>


        </div>
      </div>
    </div>
  );
};

export default Page;
