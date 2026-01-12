import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../apiConfig";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || data);
      });
  });

  return (
    <>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="card" style={{ width: "18rem" }}>
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price.toLocaleString()}</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
