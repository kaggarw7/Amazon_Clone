import React from 'react';
import "./Home.css";
import Product from "./Product";
import { motion } from 'framer-motion';


function Home() {
    return (
        <motion.div className = 'home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className = "home_container">
                <motion.img
                     whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(128,128,128)",
                        boxShadow: "0px 0px 8px rgb(128,128,128)"
                    }} 
                    className = "home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="" 
                />

                <motion.div className = 'home_row'
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(128,128,128)",
                        boxShadow: "0px 0px 8px rgb(128,128,128)"
                    }}
                >
                    <Product 
                        id = "12321341"
                        title = 'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                        price = {11.96} 
                        image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                        rating = {4}
                    />
                    <Product 
                        id = "49538094"
                        title = 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                        price = {239.0} 
                        image = 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                        rating = {5}
                    />
                </motion.div>

                <motion.div className = 'home_row'
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(128,128,128)",
                        boxShadow: "0px 0px 8px rgb(0,0,0)"
                    }}
                >
                    <Product 
                        id = "4903850"
                        title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price = {199.99} 
                        image = 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating = {3}
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={4}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </motion.div>

                <motion.div className = 'home_row'
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(128,128,128)",
                        boxShadow: "0px 0px 8px rgb(0,0,0)"
                    }}
                >
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </motion.div>

            </div>
        </motion.div>
    );
}

export default Home;
