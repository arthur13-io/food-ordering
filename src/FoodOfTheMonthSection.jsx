export default function FoodOfTheMonthSection(){
    return(
        <>
        <section id="food-of-the-month">
            <div className="container food-of-the-month-container">
                <div className="fotm">
                    <div className="fotm-image">
                        <img src="../assets/mix-pizza-table-removebg.png" alt="" />
                    </div>
                    <div className="fotm-image-description">
                        <div className="fotm-image-description-details">
                            <div className="description-head">
                                <h2>Food of the month</h2>
                            </div>
                            <div className="description-body">
                                <h3>Chicken Enchilada</h3>
                                <p className="lead">
                                Mozzarella, Chicken, enchilada sauce, spinach, cheddar, Tomatoes, and corn, with a southwest ranch drizzle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );

}