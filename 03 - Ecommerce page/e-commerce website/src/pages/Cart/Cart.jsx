import React from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function Cart({ cart, handleQuantityChange, handleRemoveItem }) {
  const handlePurchase = () => {
    toast.success("Products have been successfully purchased!");
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.5;
  const deliveryFee = 5.0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center", marginBlock: "8rem" }}>
          No products added
        </h2>
      ) : (
        <>
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imgSrc} alt={item.name} width="50" />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleQuantityChange(item.id, -1)}>
                        <FaMinus />
                      </button>
                      {item.quantity}
                      <button onClick={() => handleQuantityChange(item.id, 1)}>
                        <FaPlus />
                      </button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleRemoveItem(item.id)}>
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Discount (50%):</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button onClick={handlePurchase}>Buy Product</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
