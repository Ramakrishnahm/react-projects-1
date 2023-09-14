import data from "../../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="product">
      {data.map((item, index) => (
        <Product key={index} data={item} />
      ))}
    </div>
  );
};
export default Products;
