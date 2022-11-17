import React, { useState } from 'react';
import Menu from '../images/menu.png'


export default function Navbar() {

    const[navbar,setNavbar] = useState(false);
    const changeBg  = () => {
        if(window.scrollY >= 100){
            setNavbar(true)
          
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBg);
    

    //Navbar
    return (
        <>
            {/*<nav className="navbar navbar-expand-sm fixed-top">*/}

            <nav className={navbar ? 'navbar active navbar-expand-sm fixed-top' : 'navbar navbar-expand-sm fixed-top'}>
                <a href="" className="navbar-brand"><span>K</span>iller <span>B</span>odies by <span>K</span>arla</a>
                    <div>
                        <img className='menu' src={Menu}></img>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="" className="nav-link">Home</a>
                            </li>    
                            <li className="nav-item">
                                <a href="" className="nav-link">About</a>   
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Services</a>   
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Contact</a>   
                            </li>
                        </ul>
                    </div>
            </nav>
        
        </>
    )
}