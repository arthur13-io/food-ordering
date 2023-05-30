import {  IoLeafOutline } from 'react-icons/io5'
export default function KidsSection(){

    return(
        <>
        <section id="shareable-section">
            <div className="container shareable-container">
                <div className="shareable-image-container">
                    <img src="../assets/louis-hansel-vi0kZuoe0-8-unsplash.jpg" alt="" />
                </div>
                <div className="shareable-food-container">
                    <div className="shareable-food-container-head">
                        <h1>KIDS</h1>
                    </div>
                    <div className="angwamo-lead">
                        <p>Includes a kids drink. For children 12 & under. Add a side of fries</p>
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
                    </div>
                </div>
            </div>
        </section>
        </>
    );

}