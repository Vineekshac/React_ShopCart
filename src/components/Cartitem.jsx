const Cartitem = (props) => {
  return (
    <>
      <div className="cartitemm flex flex-row p-2 justify-evenly items-center">
        <div className="pname p-1">{props.pname}</div>
        <div className="price p-1">{props.pprice}</div>
        <div className="cross bg-black text-white w-6 rounded-full m-1">x</div>
      </div>
    </>
  );
};
export default Cartitem;
