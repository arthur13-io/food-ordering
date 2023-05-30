import {IoClose, IoFastFoodSharp} from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md'

export default function HeaderItem(){
    

    const openMenu = () => {
        const close = document.querySelector('#close-menu');
        const open = document.querySelector("#open-menu")
        const menu = document.querySelector('.header-nav-links');
        close.style.display="inline-block";
        menu.style.display = "block";
        open.style.display="none"
    }
    const closeMenu = () => {
        const close = document.querySelector('#close-menu');
        const open = document.querySelector("#open-menu")
        const menu = document.querySelector('.header-nav-links');
        open.style.display="inline-block";
        menu.style.display = "none";
        close.style.display="none"
    }

    return(
        
        <div className="container container-child">
            <div className="container-item-1">
                <div className="header-logo">
                    <IoFastFoodSharp className='fast-food'/>
                    <h1>WECOOK</h1>
                </div>
                <div className="header-links">
                    <ul className='header-nav-links'>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Rewards</a></li>
                        <li><a href="">Locations</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Donation/Sponsorship</a></li>
                        <li><a href="">Join Our Team</a></li>
                        <li><a href="">Order Online</a></li>
                    </ul>
                    
                </div>
                <button id="open-menu" onClick={openMenu}>
                    <MdOutlineMenu/>
                </button>
                <button id='close-menu' onClick={closeMenu}>
                    <IoClose/>
                </button>
            </div>
            <div className="container-item-2">
                <div id='container-item-2-heading'>
                <h1>Craft & Crust Menu</h1>
                </div>
                <div id='container-item-2-links'>
                    <a href="https://rotolos.com/wp-content/uploads/2022/05/RCC-Menu-Web-WM0522.pdf" target="_blank" rel="noopener noreferrer">Menu PDF</a>
                    <a href="">Catering</a>
                </div>
                    
            </div>
        </div>
    );
}