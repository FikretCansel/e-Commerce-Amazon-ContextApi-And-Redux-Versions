import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Product from "./Product";
import { db } from "../firebase";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">

        {
        products.map(({ id, product }) => (
                
                  <Product
                    key={id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                
              ))}
        
        </div>
      </div>
    </div>
  );
}

export default Home;
