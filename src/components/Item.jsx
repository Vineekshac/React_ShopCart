import { AiFillStar } from "react-icons/ai";
const Item = ({ name, price, id, addToCart, removeFromCart, btn }) => {
  //   const addtocart = (e) => {
  //     console.log(e);
  //   };
  return (
    <div className="item rounded-lg mt-8 bg-gray-100 ">
      <img src="sample.jpeg" alt="" className="rounded-t-lg" />
      <div className="proname font-semibold">{name}</div>
      <div className="price text-1xl font-semibold p-3">{price}</div>
      <button
        className={`bg-blue-500 text-white font-bold px-5 py-1 rounded mb-3 mr-2 ${
          btn.includes(id) && `bg-slate-200`
        }`}
        disabled={btn.includes(id)}
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart
      </button>
      <button
        className={`bg-red-400  text-white font-bold px-5 py-1 rounded mb-3  ${
          !btn.includes(id) && `bg-slate-200`
        }`}
        type="button"
        onClick={() => {
          removeFromCart(id);
        }}
        disabled={!btn.includes(id)}
      >
        {" "}
        Remove item
      </button>
    </div>
  );
};
export default Item;
