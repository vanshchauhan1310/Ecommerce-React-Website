import React from 'react'
import Header from '../Compoenent/Header/Header';
import Slider from '../Compoenent/Slider/Slider';
import Product from '../Compoenent/Product/Product';
import Footer from '../Compoenent/Footer/Footer';

function Home() {
  return (
    <div>
         <div className="App">
        <Header />
        <Slider />
        <Product />
        <Footer />
     </div>
    </div>
  )
}

export default Home
