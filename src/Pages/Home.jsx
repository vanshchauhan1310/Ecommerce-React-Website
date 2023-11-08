import React from "react";
import Header from "../Compoenent/Header/Header";
import Slider from "../Compoenent/Slider/Slider";
import Product from "../Compoenent/Product/Product";
import Footer from "../Compoenent/Footer/Footer";
import Products from '../Compoenent/Product/Products.json'

function Home() {
  return (
    <div>
      <div className="App">
        <Header />
        <Slider />

        {Products.map(ele=>{
          return <Product
          image={ele.image}
          name={ele.name}
          price={ele.price}
          mrp={ele.mrp}
        />

        })}


        <Footer />
      </div>
    </div>
  );
}

export default Home;
