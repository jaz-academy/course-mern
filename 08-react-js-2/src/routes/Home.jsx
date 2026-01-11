import { useState, useEffect } from "react";
import { BASE_URL } from "../apiConfig";

export default function Home() {
  const [products, setProducts] = useState([]);

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
              <p className="card-text">Rp.</p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
