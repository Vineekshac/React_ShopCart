import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import Items from "./components/Items.jsx";

import "./App.css";
import { useState } from "react";

const products = [
  { id: "a1", name: "Product1", price: "$20" },
  { id: "a2", name: "Product2", price: "$25" },
  { id: "a3", name: "Product3", price: "$70" },
  { id: "a4", name: "Product4", price: "$15" },
  { id: "a5", name: "Product5", price: "$23" },
  { id: "a6", name: "Product6", price: "$50" },
  { id: "a7", name: "Product7", price: "$12" },
  { id: "a8", name: "Product8", price: "$82" },
];

function App() {
  const [btn, setbtn] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const product = products.find((x) => x.id === item);
    setCart((prevState) => [...prevState, product]);
    setbtn((prevState) => [...prevState, item]);
  };

  const removeFromCart = (item) => {
    const b = cart;
    const filteredProducts = b.filter((x) => x.id !== item);
    setCart(filteredProducts);
    const filteredId = btn.filter((x) => x !== item);
    setbtn(filteredId);
    // console.log(cart);
    // setbtn((prevState) => [...prevState, item]);
  };
  console.log(btn);
  console.log(cart);
  return (
    <div className="App">
      <Navbar cartcount={cart.length} />
      {/* <Cart props={cart} className="flex" /> */}
      <div className="showcase h-80 flex justify-center items-center bg-black">
        <div className="show text-white font-semibold text-3xl">
          GET START YOUR FAVORITE SHOPPING
        </div>
      </div>
      <Items
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        btn={btn}
      />
    </div>
  );
}

export default App;
