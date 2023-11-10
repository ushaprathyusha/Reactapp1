import React, { useContext } from "react";
import "./Cart.css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,useNavigate } from "react-router-dom";
import { CartContext } from "./CreateContext";

export const calculateTotal = (cartItems) => {
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.sp * item.quantity,
      0
    );
  };

  const calculateDelivery = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 500 ? 0 : 50;
  };

  return calculateSubtotal() + calculateDelivery();
};

function Cart() {
  const { cartItems, removeFromCart, handleDecrement, handleIncrement } =
    useContext(CartContext);

  const isCartEmpty = cartItems.length === 0;

  const navigate = useNavigate();

  const handleNextClick = () => {
    if (isCartEmpty) {
      alert("Please add a product to the cart to continue.");
    } else {
      navigate("/IntegratedAddressPage", { state: { totalAmount: calculateTotal() } }); // Navigate with state
    }
  };

  console.log("Cart Items:", cartItems);

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.sp * item.quantity,
      0
    );
  };

  const calculateDelivery = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 500 ? 0 : 50;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDelivery();
  };
  console.log("Cart Items:", cartItems);

  return (
    <div className="App">
      <main className="main-container">
        <form className="product-form">
          <div className="form-box">
            <div className="table-responsive">
              <table className="cart-table table table-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length === 0 ? (
                    <tr>
                      <td colSpan="4">No products in Cart!</td>
                    </tr>
                  ) : (
                    cartItems.map((item) => (
                      <tr key={item.productId}>
                        <td colSpan="1">
                          <div className="product-info">
                            <div className="product-image-box">
                              <h6>{item.productName}</h6>
                              <div className="image-with-description">
                                {console.log("Image URL:", item.productImages)}
                                <img
                                  src={item.productImages}
                                  alt={item.productName}
                                  className="product-image"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <center>
                            <b>₹ {item.sp}</b>
                          </center>
                        </td>
                        <td className="quantity-box">
                          <button
                            type="button"
                            className="bt"
                            onClick={() => handleDecrement(item.productId)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            className="bt"
                            onClick={() => handleIncrement(item.productId)}
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <b>₹{item.sp * item.quantity}</b>
                            <button
                              type="button"
                              onClick={() =>
                                handleRemoveProduct(item.productId)
                              }
                              className="remove-icon"
                            >
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
                <tfoot>
                  <td colSpan="4">
                    <div className="custom-footer">
                      <Link to="../ProductList">
                        <button type="submit" className="btn btn-primary">
                          Continue Shopping
                        </button>
                      </Link>
                      <button
                        className="cart-next-button"
                        disabled={isCartEmpty}
                        onClick={handleNextClick}
                      >
                        Next
                      </button>
                    </div>
                  </td>
                </tfoot>
              </table>
            </div>
          </div>
        </form>
        {/* Additional table for cart total */}
        <div className="cart-total-table">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="2">Cart Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>₹{calculateSubtotal()}</td>
              </tr>
              <tr>
                <td>Delivery</td>
                <td>₹{calculateDelivery()}</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="coupon-input"
                  />
                </td>
              </tr>
              <tr>
                <td>Total Amount</td>
                <td>₹{calculateTotal()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Cart;
