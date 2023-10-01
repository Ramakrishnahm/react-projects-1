const Product = (props) => {
  // console.log(props);
  const { avatar, name, rs } = props.data;
  return (
    <div className="productList">
      <img
        style={{ borderRadius: "10px", width: "200px", height: "150px" }}
        src={avatar}
        alt="avatar"
      />
      <div style={{ padding: "20px" }}>
        <h2>{name}</h2>
        <p>{rs}</p>
      </div>
    </div>
  );
};
export default Product;
