import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <h1>Keranjang Belanja</h1>
      {cart.length === 0 && <p>Belum ada Produk di Keranjang!</p>}
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex juxtify-content-between align-items-center border-bottom py-2"
        >
          <img
            src={item.thumbnail}
            width="50"
            height="50"
            className="border rounded-3 me-2"
            alt=""
          />
          <div>
            <strong className="me-2">{item.title}</strong>
            Rp. {item.price.toLocaleString()}
          </div>
          <button
            className="btn btn-danger ms-2"
            onClick={() => removeFromCart(item.id)}
          >
            Hapus
          </button>
        </div>
      ))}
    </>
  );
}
