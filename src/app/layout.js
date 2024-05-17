"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { FaGithub,FaLinkedin, FaFacebook, FaInstagram , FaTwitter, FaWhatsappSquare } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>

      <ul className="navbar"> 
        <div>
          <li className="brand"> Kabbo </li>
        </div>

        <div className="nav-links">
          <li className={pathname === "/home" ? "active" : ""}> 
            <Link href="/home" activeClassName="active">
              Home
            </Link>
          </li>
          <li className={pathname === "/about" ? "active" : ""}> 
            <Link href="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li className={pathname === "/skill" ? "active" : ""}> 
            <Link href="/skill" activeClassName="active">
              Skill
            </Link>
          </li>
          <li className={pathname === "/work" ? "active" : ""}> 
            <Link href="/work" activeClassName="active">
              Work
            </Link>
          </li>
          <li className={pathname === "/contact" ? "active" : ""}> 
            <Link href="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </div>
      </ul>

      {children}

      <footer className="footer">
        <ul className="social-icons">
          <li><a href="https://github.com/kabboWebData"  style={{color:"#333333"}}>  <FaGithub /> </a> </li>
          <li><a href="https://www.linkedin.com/in/kawshik-kabbo-72a76b297/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  style={{color:"#0077B5"}}>  <FaLinkedin/>  </a>  </li>
          <li><a href="https://web.facebook.com/kawshikrahman.kabbo" style={{color:"#3b5998"}}>  <FaFacebook />  </a>  </li>
          <li><a href="https://www.instagram.com/kawshikrahmankabbo/"  style={{color:"#e4405f"}}>  <FaInstagram/>  </a>  </li>

          <li><a href="https://twitter.com/kabbo92899"  style={{color:"#1DA1F2"}}>  <FaTwitter />  </a>  </li>

          <li><a href="https://web.whatsapp.com/"  style={{color:"#25D366"}}>  <FaWhatsappSquare />  </a>  </li>

          

          
        </ul>
      </footer>
        
      </body>
    </html>
  );
}
