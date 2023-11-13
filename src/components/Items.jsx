import Item from "./Item.jsx";

const Items = ({ products, addToCart, removeFromCart, btn }) => {
  return (
    <div className="flex justify-evenly flex-wrap ">
      {products.map((product) => (
        <Item
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          btn={btn}
        />
      ))}
    </div>
  );
};
export default Items;
