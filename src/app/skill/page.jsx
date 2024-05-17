"use client"

import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import "../globals.css";


import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { FaGithubSquare } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import { SiAndroidstudio } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { SiCodeblocks } from "react-icons/si";
import { RiRedPacketFill } from "react-icons/ri";
import { LuFigma } from "react-icons/lu";





const page = () => {
  return (
    <div>
        <h1 style={{textAlign: "center"}}> Skill </h1> <br/>

        <h3 style={{marginLeft:"60px"}}> Fontend Development</h3> <br/>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        <Card className="custom-card" style={{ width: "30%", margin: "10px", padding: "10px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>HTML</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <FaHtml5 style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
           </ul>

            <Card.Text>HTML, or Hypertext Markup Language, serves as the backbone of web development, 
              providing the structure and semantics necessary for creating web pages.
            It enables the organization and presentation of content on the web, 
            allowing developers to define elements such as headings, paragraphs, images, and links.</Card.Text>

           <Card.Link href=" https://en.wikipedia.org/wiki/HTML"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>


        <Card className="custom-card" style={{ width: "30%", margin: "10px", padding: "10px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>CSS</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <SiCss3 style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
           </ul>

            <Card.Text>CSS (Cascading Style Sheets) is crucial for web development as it allows developers to control the layout, 
              styling, and presentation of web pages,
              ensuring a consistent and visually appealing user experience across different devices and screen sizes.</Card.Text>

           <Card.Link href=" https://en.wikipedia.org/wiki/CSS"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "30%", margin: "10px", padding: "10px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Bootstrap</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <FaBootstrap style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
           </ul>

            <Card.Text>Bootstrap is a powerful front-end framework that simplifies and accelerates the process of building responsive and mobile-first websites. 
              Its pre-designed components, grid system, 
              and CSS stylesheets provide developers with a solid foundation for creating modern and professional-looking web applications with minimal effort.</Card.Text>

           <Card.Link href=" https://getbootstrap.com/docs/5.3/getting-started/introduction/"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>


        <Card className="custom-card" style={{ width: "30%", margin: "10px", padding: "10px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>javaScript</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <IoLogoJavascript style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
           </ul>

            <Card.Text>JavaScript is a fundamental programming language for web development, enabling dynamic and interactive features on websites. 
              It empowers developers to add functionality such as form validation, animations, DOM manipulation, 
              and event handling, making web pages more engaging and user-friendly.</Card.Text>

           <Card.Link href=" https://en.wikipedia.org/wiki/JavaScript"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>


        <Card className="custom-card" style={{ width: "30%", margin: "10px", padding: "10px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>React.js</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <FaReact style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
           </ul>

            <Card.Text>React is a popular JavaScript library for building user interfaces, 
              known for its component-based architecture and efficient rendering. 
              It enables developers to create reusable UI components, manage state effectively,
               and build complex single-page applications (SPAs) with ease, enhancing productivity and code maintainability.</Card.Text>

           <Card.Link href=" https://react.dev/learn"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>


        <Card className="custom-card" style={{ width: "30%", margin: "10px", padding: "10px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Next.js</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <RiNextjsFill style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
           </ul>

            <Card.Text>Next.js is a popular React framework that allows for server-side rendering and static site generation, 
              providing a seamless and efficient development experience for building modern web applications.</Card.Text>

           <Card.Link href=" https://nodejs.org/docs/latest/api/"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>


        </div> <br/> <br/>

       

        <div style={{ display: "flex", flexDirection:"row", justifyContent: "center" }}>

  <div style={{display:"flex", flexDirection:"column", padding:"10px"}}> 

    <h3 style={{marginLeft:"200px"}}>Backend Development</h3> <br/> <br/>

    <div style={{display:"flex", flexDirection:"row", justifyContent: "center"}}> <br/>
      <Card className="custom-card" style={{ width: "50%", margin: "3px", padding: "3px", border: "2px solid #6495ED" }}>
        <Card.Body>
          <Card.Title>Node.js</Card.Title>

          <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <DiNodejs style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
          </ul>

          <Card.Text>Node.js is a runtime environment that allows developers to execute JavaScript code server-side, enabling the development of scalable and high-performance web applications. It facilitates building real-time applications, handling I/O operations asynchronously, and leveraging a vast ecosystem of npm packages, making it a versatile tool for backend development.</Card.Text>

          <Card.Link href="https://nodejs.org/docs/latest/api/">View Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="custom-card" style={{ width: "50%", margin: "3px", padding: "3px", border: "2px solid #6495ED" }}>
        <Card.Body>
          <Card.Title>Express.js</Card.Title>

          <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <SiExpress style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
          </ul>

          <Card.Text>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
             It facilitates the rapid development of server-side web applications, 
            simplifying tasks such as routing, middleware integration, and response handling.</Card.Text>

          <Card.Link href="https://expressjs.com/">View Link</Card.Link>
        </Card.Body>
      </Card>
    </div>

  </div>

  <div style={{display:"flex", flexDirection:"column", padding:"10px"}}> <br/>

    <h3 style={{marginLeft:"200px"}}>Database</h3> <br/> <br/>

    <div style={{display:"flex", flexDirection:"row", justifyContent: "center"}}> <br/>
      <Card className="custom-card" style={{ width: "60%", margin: "3px", padding: "3px", border: "2px solid #6495ED" }}>
        <Card.Body>
          <Card.Title>MongoDB</Card.Title>

          <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <SiMongodb style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
          </ul>

          <Card.Text>MongoDB is a popular open-source NoSQL database that uses a document-oriented data model.
             It provides high performance, high availability, and easy scalability, 
            making it suitable for a wide range of applications, from small startups to large enterprises.</Card.Text>

          <Card.Link href="https://www.mongodb.com/">View Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="custom-card" style={{ width: "60%", margin: "3px", padding: "3px", border: "2px solid #6495ED" }}>
        <Card.Body>
          <Card.Title>MySQL</Card.Title>

          <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <SiMysql style={{ fontSize:"80px", marginLeft:"100px"}}/> </li>
          </ul>

          <Card.Text>MySQL is an open-source relational database management system (RDBMS) that uses structured query language (SQL). It is widely used for managing structured data and is particularly popular for web development and embedded applications.</Card.Text>

          <Card.Link href="https://www.mysql.com/">View Link</Card.Link>
        </Card.Body>
      </Card>
    </div>

  </div>

</div> <br/>


<h3 style={{marginLeft:"60px", textAlign:"center"}}> Software Tools</h3> <br/>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        <Card className="custom-card" style={{ width: "20%", margin: "5px", padding: "5px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Github</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <FaGithubSquare style={{ fontSize:"80px", marginLeft:"80px"}}/> </li>
           </ul>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "20%", margin: "5px", padding: "5px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>VsCode</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <VscVscode style={{ fontSize:"80px", marginLeft:"80px"}}/> </li>
           </ul>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "20%", margin: "5px", padding: "5px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Android Studio</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <SiAndroidstudio style={{ fontSize:"80px", marginLeft:"80px"}}/> </li>
           </ul>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "20%", margin: "5px", padding: "5px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Colab</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <SiGooglecolab style={{ fontSize:"80px", marginLeft:"80px"}}/> </li>
           </ul>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "20%", margin: "5px", padding: "5px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Code Blocks</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <SiCodeblocks style={{ fontSize:"80px", marginLeft:"80px"}}/> </li>
           </ul>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "20%", margin: "5px", padding: "5px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Packet Tracer</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <RiRedPacketFill style={{ fontSize:"80px", marginLeft:"80px"}}/> </li>
           </ul>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "20%", margin: "5px", padding: "5px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Figma</Card.Title>

            <ul style={{listStyle:"none", padding:0}}>
            <li style={{display:"flex"}}>  <LuFigma style={{ fontSize:"80px", marginLeft:"80px"}}/> </li>
           </ul>
           
          </Card.Body>
        </Card>


    </div>

</div>
  )
}

export default page
