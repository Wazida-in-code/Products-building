import { useState } from "react";
import type { ProductType } from "../../type";
import "./Product.css"

export interface ProductProps {
  product: ProductType;
  handleFeedbackItems: (product: ProductType) => void
}

export default function Product({ product, handleFeedbackItems}: ProductProps) {

    const [feedback, setFeedback] = useState(false);

    const handleFeedback = () => {
      setFeedback(!feedback)
      handleFeedbackItems(product)
    }
  
  return (
    <>
      <div className="w-[300px] bg-blue-50 rounded-[12px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] transform transition-transform duration-200 ease-out hover:scale-115 hover: -translate-y[5px] hover:bg-blue-100">
        {" "}
        <div className="h-[250px] p-[20px] flex justify-center items-center">
          {" "}
          <img
            src={product.image}
            alt={product.title}
            className="w-[180px] h-[200px] object-contain"
          />{" "}
        </div>{" "}
        <div className="p-[20px]">
          {" "}
          <p className="product-category">{product.category}</p>{" "}
          <h2 className="product-title"> {product.title} </h2>{" "}
          <p className="product-description"> {product.description} </p>{" "}
          <div className="product-rating">
            {" "}
            <button onClick={handleFeedback} className="p-[10px] border-2 border-solid border-purple-500 bg-purple-300 rounded-2xl m-2.5" >{feedback ? "Good!" : "Feedback"}</button>
          </div>{" "}
          <div className="product-bottom">
            {" "}
            <p className="product-price">${product.price}</p>{" "}
            <button className="product-button"> Add to Cart </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
