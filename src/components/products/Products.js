import data from "../../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="product">
      {data.map((item) => (
        <Product data={item} />
      ))}
    </div>
  );
};
export default Products;
