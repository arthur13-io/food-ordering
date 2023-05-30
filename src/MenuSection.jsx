import {IoPizzaOutline, IoFastFoodOutline, IoCafeOutline, IoBeerOutline, IoWineOutline} from 'react-icons/io5';
import { BiBowlRice, BiCake, BiCheese, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdDinnerDining, MdFoodBank, MdOutlineCoffeeMaker, MdOutlineEgg, MdWineBar } from "react-icons/md";


export default function MenuSection(){
    

    const scrollMyBar = (direction="left", distance = 100) => {
        let scrollElem = document.querySelector(".scroll-box");
        let backDrop = document.querySelector(".back-drop");
        if(direction=="right"){
            backDrop.style.display = "block";
        }
        else backDrop.style.display = "none";
        

        direction == 'left'? scrollElem.scrollLeft -= distance : scrollElem.scrollLeft += distance;
        
    };


    return(
        <section id='menu' className="menu" >
            <div className="back-drop right">
                
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
        </section>
    );
}