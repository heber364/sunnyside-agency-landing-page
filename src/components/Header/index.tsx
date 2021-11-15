import logoImg from '../../assets/logo.svg'
import arrowDownImg from '../../assets/icon-arrow-down.svg'
import  { VscListFlat}   from 'react-icons/Vsc'

import './styles.scss'
import { useState } from 'react';

export function Header(){
    const [idNavMenu, setIdNavMenu] = useState('nav-menu')

    function handleOpenToggle(){
        if(idNavMenu==='show-menu'){
            setIdNavMenu('nav-menu');
        }else{
            setIdNavMenu('show-menu');
        }
    }

    function handleCloseToggle(){
        setIdNavMenu('nav-menu');
    }

    const navLink = document.querySelectorAll('.nav__link');
    
    function linkAction(){
        setIdNavMenu('nav-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))

    return(
        <header id="header">
            <nav>
                <img src={logoImg} className="logo" alt="Sunnyside Angenvy Logo"/> 

                <div className="nav__menu"  id={idNavMenu}>
                    <div className="triangle"></div>
                    <ul>
                        <li>
                            <a href="#about" className="nav__link"> 
                                Abount
                            </a>
                        </li> 
                        <li>
                            <a href="#services" className="nav__link">
                                Services
                            </a>
                        </li>  
                        <li>
                            <a href="#projects" className="nav__link">
                                Projects
                            </a>
                        </li>  
                        <li>
                            <a href="#contact" className="nav__link">
                                Contact
                            </a>
                        </li>   
                    </ul>

                </div>
                <div className="toggle" onClick={handleOpenToggle}>
                    <VscListFlat color="var(--white)" size="30"/>
                </div>

            </nav>

            
            <div>
                <h1>WE ARE CREATIVES</h1>
                <img src={arrowDownImg} alt="" />
            </div>


        </header>

    )
}