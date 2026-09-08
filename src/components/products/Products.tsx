import { use, useState } from "react";
import type { ProductType } from "../../type";
import "./Products.css";
import Product from "../product/Product";

export interface ProductsProps {
  ProductPromise: Promise<ProductType[]>;
}

export default function Products({ ProductPromise }: ProductsProps) {
  const products = use(ProductPromise);

  const [feedbackItem, setFeedbackItem] = useState<ProductType[]>([]);
  const handleFeedbackItems = (product: ProductType):void => {
    let newFeedback = [...feedbackItem, product]

    if (feedbackItem.includes(product)){
      newFeedback = feedbackItem.filter(p => p.id !== product.id)
    }

    setFeedbackItem(newFeedback)
  }

  return (
    <>
    <h2>Best Items:{feedbackItem.length}</h2>
      <div className="grid-card">
        {
        products.map((product, index) => <Product handleFeedbackItems={handleFeedbackItems} key={index} product = {product}></Product>)
        }
      </div>
    </>
  );
}
