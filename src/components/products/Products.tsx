import { use } from "react";
import type { ProductType } from "../../type";
import "./Products.css";
import Product from "../product/Product";

export interface ProductsProps {
  ProductPromise: Promise<ProductType[]>;
}

export default function Products({ ProductPromise }: ProductsProps) {
  const products = use(ProductPromise);

  return (
    <>
      <div className="grid-card">
        {
        products.map((product, index) => <Product key={index} product = {product}></Product>)
        }
      </div>
    </>
  );
}
