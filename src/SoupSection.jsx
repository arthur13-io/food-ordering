import {  IoLeafOutline } from 'react-icons/io5'
export default function SoupSection(){

    return(
        <>
        <section id="shareable-section">
            <div className="container shareable-container">
                <div className="shareable-image-container">
                    <img src="../assets/pork-curry-thai-cuisine-wooden-background.jpg" alt="" />
                </div>
                <div className="shareable-food-container">
                    <div className="shareable-food-container-head">
                        <h1>SOUPS</h1>
                    </div>
                    <div className="shareable-food-container-body">
                        <div className="shareable-food-container-items">
                            <h4>SPINACH & ARTICHOKE</h4>
                            <p>with garlic flatbread</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>

                        <div className="shareable-food-container-items">
                            <h4>CALAMARI</h4>
                            <p>fried and tossed in sweet chili sauce</p>
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