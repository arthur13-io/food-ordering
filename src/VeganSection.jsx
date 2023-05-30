import {IoFastFoodSharp, IoLeafOutline} from 'react-icons/io5';


export default function VeganSection(){
    return(
        <>
        <section id="veganSection">
            <div className="container vegan-container">
                <div className="vegan-container-info">
                    <div>
                        <IoFastFoodSharp className='vegan-container-info-icons'/>
                        <p>Favorite</p>
                    </div>
                    <div>
                        <IoLeafOutline className='vegan-container-info-icons'/>
                        <p>Vegetarian</p>
                    </div>
                </div>
                <div className="vegan-container-links">
                    <button>Vegan nutrition info</button>
                    <button>allergens</button>
                </div>
            </div>
        </section>
        </>
    );
}