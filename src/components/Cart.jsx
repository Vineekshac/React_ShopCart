import Cartitem from "./Cartitem.jsx";
const Cart = ({ props }) => {
  return (
    <div className="cardisplay flex">
      {props.map((x) => (
        <Cartitem key={x.id} pname={x.name} pprice={x.price} />
      ))}
    </div>
  );
};
export default Cart;
