import {IoPizzaOutline, IoFastFoodOutline, IoCafeOutline, IoBeerOutline, IoWineOutline} from 'react-icons/io5';
import { BiBowlRice, BiCake, BiCheese, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdDinnerDining, MdFoodBank, MdOutlineCoffeeMaker, MdOutlineEgg, MdWineBar } from "react-icons/md";
// import { useEffect, useState } from 'react';


export default function MenuSection(){
    
    const scrollMyBar = (direction="left", distance = 100) => {
        let scrollElem = document.querySelector(".scroll-box");
        // let backDrop = document.querySelector(".back-drop");
        let leftBackDrop = document.querySelector(".drop-left");
        let rightBackDrop = document.querySelector(".drop-right");

        if(direction=="left"){
            scrollElem.scrollLeft -= distance;
            leftBackDrop.style.display ="block";
            if(scrollElem.scrollLeft == 0){
                leftBackDrop.style.display = "none";
                rightBackDrop.style.display = "block";
            }
        }
        else{
            scrollElem.scrollLeft += distance;
            // console.log(scrollElem.scrollLeft);
            if(scrollElem.scrollLeft > 900){
                rightBackDrop.style.display = "none";
                leftBackDrop.style.display = "block"
            }
             }
            // else{
            //     scrollElem.scrollLeft += distance;
            //     if(scrollElem.scrollLeft !== 0 && scrollElem.scrollLeft !==900)
            //     rightBackDrop.style.display= "block";
            //     leftBackDrop.style.display = "block";
            // }
        // direction == 'left'? scrollElem.scrollLeft -= distance : scrollElem.scrollLeft += distance;
        
    };

//     const [scrollLeft, setScrollLeft] = useState(0);
//   const [displayLeftBackdrop, setDisplayLeftBackdrop] = useState(false);
//   const [displayRightBackdrop, setDisplayRightBackdrop] = useState(true);

//   const scrollMyBar = (direction = 'left', distance = 100) => {
//     const scrollElem = document.querySelector('.scroll-box');
//     const leftBackDrop = document.querySelector('.drop-left');
//     const rightBackDrop = document.querySelector('.drop-right');

//     if (direction === 'left') {
//       scrollElem.scrollLeft -= distance;
//       setDisplayLeftBackdrop(true);

//       if (scrollElem.scrollLeft === 0) {
//         setDisplayLeftBackdrop(false);
//         setDisplayRightBackdrop(true);
//       }
//     } else {
//       scrollElem.scrollLeft += distance;

//       if (scrollElem.scrollLeft > 900) {
//         setDisplayRightBackdrop(false);
//         setDisplayLeftBackdrop(true);
//       }
//     }
//   };

//   useEffect(() => {
//     const scrollElem = document.querySelector('.scroll-box');
//     const handleScroll = () => {
//       setScrollLeft(scrollElem.scrollLeft);
//     };
//     scrollElem.addEventListener('scroll', handleScroll);
//     return () => {
//       scrollElem.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

    return(
        <section id='menu' className="menu" >
            
            <div className="back-drop drop-right">
            
            </div>
            <div className="menu-btn left" onClick={() => {scrollMyBar("left")}}>
                <BiChevronLeft />
            </div>

            <div className="scroll-box">

                <ul className="menu-list">
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <IoPizzaOutline className='menu-list-item-link-icon' />
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <IoFastFoodOutline className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <IoCafeOutline className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <IoBeerOutline className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <BiBowlRice className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <BiCheese className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <BiCake className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <MdOutlineEgg className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <MdDinnerDining className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <MdWineBar className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <MdFoodBank className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <MdOutlineCoffeeMaker className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="#">
                            <div className='menu-list-item-link'>
                                <IoWineOutline className='menu-list-item-link-icon'/>
                                <p>Shareable</p>
                            </div>
                        </a>
                    </li>
                
                </ul> 

                
            </div>

            <div className="menu-btn right" onClick={() => {scrollMyBar("right")}}>
                <BiChevronRight />
            </div>
            <div className="back-drop drop-left">
            
            </div>
        </section>
    );
}