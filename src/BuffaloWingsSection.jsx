import {  IoLeafOutline } from 'react-icons/io5'
export default function BuffaloWingSection(){

    return(
        <>
        <section id="shareable-section">
            <div className="container shareable-container">
                <div className="shareable-image-container">
                    <img src="../assets/fried-chicken-with-variety-sauces-french-fries.jpg" alt="" />
                </div>
                <div className="shareable-food-container">
                    <div className="shareable-food-container-head">
                        <h1>BUFFALO WINGS</h1>
                    </div>
                    {/* <div>
                    <p className='lead'>
                        Flavors: garlic parmesan, sweet heat, medium, spicy, BBQ, spicy BBQ, Chalmette
                        </p>
                    </div> */}
                    <div className="shareable-food-container-body">
                        <div className="shareable-food-container-items">
                            <h4>SPINACH & ARTICHOKE</h4>
                            <p>with garlic flatbread</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>

                        <div className="shareable-food-container-items">
                            <h4>SPINACH & ARTICHOKE</h4>
                            <p>with garlic flatbread</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>

                        <div className="shareable-food-container-items">
                            <h4>SPINACH & ARTICHOKE</h4>
                            <p>with garlic flatbread</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );

}