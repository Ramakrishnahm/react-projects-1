import { comfydata } from "../../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="product">
      {comfydata.map((item, index) => (
        <Product key={index} data={item} />
      ))}
    </div>
  );
};
export default Products;
