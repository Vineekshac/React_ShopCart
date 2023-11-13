import { AiOutlineShoppingCart } from "react-icons/ai";
import "../navbar.css";
const Navbar = (props) => {
  return (
    <div className="navbar flex items-center justify-between p-1">
      <div className="logo text-black text-xl font-semibold font-sans mx-1">
        MoreMarketplace
      </div>
      <div className="addtocart flex justify-evenly items-center p-1 rounded mr-1 mt-1">
        <div className="font-bold">
          <AiOutlineShoppingCart className="font-bold text-2xl" />
        </div>
        <div className="cart">Cart</div>{" "}
        <div className="count rounded-3xl bg-black text-white w-7 ">
          {props.cartcount}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
