import type { ProductType } from "../../type";
import "./Product.css"

export interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  console.log(Product);
  return (
    <>
      <div className="product-card">
        {" "}
        <div className="product-image-container">
          {" "}
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />{" "}
        </div>{" "}
        <div className="product-info">
          {" "}
          <p className="product-category">{product.category}</p>{" "}
          <h2 className="product-title"> {product.title} </h2>{" "}
          <p className="product-description"> {product.description} </p>{" "}
          <div className="product-rating">
            {" "}
            ⭐ {product.rating.rate}{" "}
            <span>({product.rating.count} reviews)</span>{" "}
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
