import {  IoLeafOutline } from 'react-icons/io5'
export default function DessertsSection(){

    return(
        <>
        <section id="shareable-section">
            <div className="container shareable-container">
                <div className="shareable-image-container">
                    <img src="../assets/naked-chocolate-cake-decorated-with-strawberries-raspberry-small-apples-syrup.jpg" alt="" />
                </div>
                <div className="shareable-food-container">
                    <div className="shareable-food-container-head">
                        <h1>DESSERTS</h1>
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

                        <div className="shareable-food-container-items">
                            <h4>ONION RINGS</h4>
                            <p>served with aioli</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>

                        <div className="shareable-food-container-items">
                            <h4>CHEESE FRIES</h4>
                            <p>mozzarella, cheddar, bacon, jalapeños, feta, ranch dipping</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>

                        <div className="shareable-food-container-items">
                            <h4>TRUFFLE FRIES</h4>
                            <p>garlic butter, parmesan, fresh basil</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>

                        <div className="shareable-food-container-items">
                            <h4>FRIED CAULIFLOWER</h4>
                            <p>served with aioli</p>
                            <div className='shareable-icon'>
                                <IoLeafOutline/>
                            </div>
                        </div>

                        <div className="shareable-food-container-items">
                            <h4>BRUSSELS SPROUTS</h4>
                            <p>roasted brussels sprouts, bacon, parmesan cheese, garlic butter, balsamic reduction</p>
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