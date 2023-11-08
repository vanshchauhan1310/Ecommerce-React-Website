import React from "react";
import Header from "../Compoenent/Header/Header";
import Footer from "../Compoenent/Footer/Footer";
import CartPage from "../Compoenent/Cart/CartPage";
import Details from "../Compoenent/Cart/Details.json";


function Cart() {
  return (
    <div>
      <Header />

      {Details.map((ele) => {
        return (
          <CartPage
            image={ele.image}
            name={ele.name}
            descreption={ele.descreption}
            price={ele.price}
            subtotal={ele.subtotal}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Cart;
