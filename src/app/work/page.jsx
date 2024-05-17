"use client"

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import "../globals.css";

import Thyroid from "/public/thyroid.jpg";

import Full from "/public/fullstack.jpg";

import Mobile from "/public/Task.jpg";

import Unid from "/public/oop.png";

import { MdOutlineWork } from "react-icons/md";

const page = () => {
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0, marginLeft:"200px" }}>
          <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
            <MdOutlineWork style={{ marginRight: '8px', fontSize:"40px" }} />
            <h3>Recent Work</h3>
          </li>
      </ul>
       <div style={{display:"flex", flexDirection:"row", marginLeft:"200px"}}> 

       <Card className="custom-card" style={{ width: "30%", margin: "20px", padding: "20px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Thyroid Awareness</Card.Title> <br/>

           <Image src={Thyroid} alt=" " style={{height:"130px", width:"190px", marginLeft:"40px", border:"2px solid gray", borderRadius:"6px"}}/> <br/> <br/>

            <Card.Text>We have developed a project on Human Computer Interaction Related 
              Thyroid Awareness on how to make people aware of thyroid and actions to protect against thyroid</Card.Text>

           <Card.Link href=" https://www.overleaf.com/project/6625299d18d4aab757b56162"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "30%", margin: "20px", padding: "20px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Fullstack Todo Management System (React.js, Next.js, Node.js, Express.js, MongoDB)</Card.Title> <br/>

           <Image src={Full} alt=" " style={{height:"130px", width:"190px", marginLeft:"40px", border:"2px solid gray", borderRadius:"6px"}}/><br/> <br/>

            <Card.Text>Created a full stop development project using front end Next.js, React.js and back end Node.js, Express.js and MongoDB
               for database where user 
              can do complete CRUD project work after registration and login first create, update,  read and remove.</Card.Text>

           <Card.Link href=" "> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>
       

       </div> <br/> <br/>

       <ul style={{ listStyle: 'none', padding: 0, marginLeft:"200px" }}>
          <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
            <MdOutlineWork style={{ marginRight: '8px', fontSize: '40px'}} />
            <h3>Previous Work</h3>
          </li>
      </ul>

       <div style={{display:"flex", flexDirection:"row", marginLeft:"200px"}}> 

       <Card className="custom-card" style={{ width: "30%", margin: "20px", padding: "20px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>Task Management App</Card.Title> <br/>

           <Image src={Mobile} alt=" " style={{height:"130px", width:"190px", marginLeft:"40px", border:"2px solid gray", borderRadius:"6px"}}/><br/> <br/>

            <Card.Text>Using dart programming language and using pflutter framework, we have developed a 
              task management system mobile application where first the user will register then login through registration
               and then can add tasks, delete them, and all the data will be added to firebase.</Card.Text>

           <Card.Link href=" https://github.com/kabboWebData/Task-Management-App"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>

        <Card className="custom-card" style={{ width: "30%", margin: "20px", padding: "20px", border: "2px solid #6495ED" }}>
          <Card.Body>
            <Card.Title>UNID</Card.Title> <br/>

           <Image src={Unid} alt=" " style={{height:"130px", width:"190px", marginLeft:"40px", border:"2px solid gray", borderRadius:"6px"}}/> <br/> <br/>

            <Card.Text>Using Scan Builder and Netbeans software we created UNID related object oriented project
               where all information of a citizen will be stored.</Card.Text>

           <Card.Link href="https://github.com/kabboWebData/CSE213OOP"> View Link </Card.Link> <br/>
           
          </Card.Body>
        </Card>
       

       </div>
      
    </div>
  )
}

export default page
