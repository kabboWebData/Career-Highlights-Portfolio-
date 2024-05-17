"use client"

import React from 'react';
import Image from 'next/image';
import { FcGraduationCap } from 'react-icons/fc';
import Read from '/public/readCv.png';
import "../globals.css";

const Page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1, padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '350px', height: '270px', border: '1px solid #6495ED', borderRadius: '25px', overflow: 'hidden', marginBottom:"180px" }}>
          <Image src={Read} alt=" " layout="responsive" width={350} height={270} className='Port-Image'/>
        </div>
      </div>

      <div style={{ flex: 1, padding: '12px' }}>
        <h2 style={{ marginBottom: '20px', marginLeft:"220px" }}>Education</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '30px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FcGraduationCap style={{ marginRight: '10px', fontSize: '34px', marginBottom:"30px" }} />
              <div>
                <h5 style={{ marginBottom: '5px', fontSize: '14px' }}>2020-2024</h5>
                <h3 style={{ marginBottom: '5px', fontSize: '18px' }}>Bachelor of Science</h3>
                <h4 style={{ marginBottom: '5px', fontSize: '14px' }}>Independent University Bangladesh (IUB)</h4>
                <p style={{ marginBottom: '5px', fontSize: '14px' }}>Computer Science And Engineering</p>
                <p style={{ marginBottom: 0, fontSize: '14px' }}>Earned Credits: 128, Current CGPA: 3.38</p>
              </div>
            </div>
          </li>

          <li style={{ marginBottom: '30px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FcGraduationCap style={{ marginRight: '10px', fontSize: '34px', marginBottom:"30px" }} />
              <div>
                <h5 style={{ marginBottom: '5px', fontSize: '14px' }}>2017-2019</h5>
                <h3 style={{ marginBottom: '5px', fontSize: '18px' }}>Higher Secondary School</h3>
                <h4 style={{ marginBottom: '5px', fontSize: '14px' }}>Milestone College</h4>
                <p style={{ marginBottom: '5px', fontSize: '14px' }}>Group:Science</p>
                <p style={{ marginBottom: 0, fontSize: '14px' }}>Result:GPA-5</p>
              </div>
            </div>
          </li>

          <li style={{ marginBottom: '30px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FcGraduationCap style={{ marginRight: '10px', fontSize: '34px', marginBottom:"30px" }} />
              <div>
                <h5 style={{ marginBottom: '5px', fontSize: '14px' }}>2015-2017</h5>
                <h3 style={{ marginBottom: '5px', fontSize: '18px' }}>Secondary School</h3>
                <h4 style={{ marginBottom: '5px', fontSize: '14px' }}>Meghdubi Adarsha High School </h4>
                <p style={{ marginBottom: '5px', fontSize: '14px' }}>Group: Science</p>
                <p style={{ marginBottom: 0, fontSize: '14px' }}>Result: GPA-4.64</p>
              </div>
            </div>
          </li>

        
        </ul>
      </div>
    </div>
  );
};

export default Page;
