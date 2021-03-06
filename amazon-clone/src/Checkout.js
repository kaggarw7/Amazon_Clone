import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className = "checkout">
            <div className="checkout_left">
                <img className = 'checkout_ad' 
                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                     alt="" 
                />
                <div>
                    <h3 className = 'checkout_email'>
                        Hello, {user?.email}
                    </h3>
                    {basket?.length == 0? (
                        <h2 className = 'checkout_title'>
                            Your Shopping Basket is Empty 
                        </h2>

                    ) : (
                        <h2 className = 'checkout_title'>
                            Your Shopping Basket  
                        </h2>
                    )}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                
            </div>            

            <div className="checkout right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
