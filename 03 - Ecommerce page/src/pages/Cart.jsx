import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "../css/Cart.css";

function Cart({ user }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Current user:", user);

    const fetchCartItems = async () => {
      if (user && user.uid) {
        try {
          const userCartRef = doc(db, "carts", user.uid);
          const cartDoc = await getDoc(userCartRef);
          if (cartDoc.exists()) {
            console.log("Cart data:", cartDoc.data());
            setCart(cartDoc.data().items || []);
          } else {
            console.log("No cart data found.");
            setCart([]);
          }
        } catch (error) {
          console.error("Error fetching cart items: ", error);
        }
      }
    };

    fetchCartItems();
  }, [user]);

  const updateFirestoreCart = async (updatedCart) => {
    if (user && user.uid) {
      try {
        const userCartRef = doc(db, "carts", user.uid);
        await setDoc(userCartRef, { items: updatedCart }, { merge: true });
      } catch (error) {
        console.error("Error updating cart in Firestore: ", error);
        toast.error("Failed to update cart");
      }
    }
  };

  const handleQuantityChange = async (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + change, 1) }
        : item
    );
    setCart(updatedCart);
    await updateFirestoreCart(updatedCart);
  };

  const handleRemoveItem = async (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    await updateFirestoreCart(updatedCart);
  };

  const handlePurchase = async () => {
    toast.success("Products have been successfully purchased!");
    setCart([]);
    if (user && user.uid) {
      await updateFirestoreCart([]);
    }
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
          Your cart is empty
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
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
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
