import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Global_Context/GlobalContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faLock,
  faTag,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Swal from "sweetalert2";

function Cart() {
  const data = useContext(GlobalContext);
  useEffect(() => {
    data.getTotal();
  }, [data.total, data.cart, data]);
  const success = () => {
    Swal.fire({
      position: "middle-center",
      icon: "success",
      title: "Sucess",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <Header />
      {data.total === 0 ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            paddingTop: "25%",
            paddingBottom: "60%",
          }}
        >
          <p>{"Your cart is empty :("}</p>
          <Link style={{ color: "#FF0000" }} to="/">
            <p style={{ color: "#FF0000" }}>Go to shop</p>
          </Link>
        </div>
      ) : (
        <div className="cart-page">
          <div>
            <div className="cart-header">
              {" "}
              <h4>My Cart</h4>
            </div>
            {data.cart.map((carts) => (
              <div className="cart-page-info" key={carts.id}>
                <div className="cart-page-info-2">
                  <div className="cart-page-img">
                    <img src={carts.images} alt="cart-page" />
                  </div>
                  <div className="cart-page-name">
                    <p style={{ marginBottom: "5px" }}>{carts.name}</p>
                    <p>
                      {data.naira
                        ? "₦ " + carts.price[0].toLocaleString()
                        : data.dollar
                        ? "$ " + carts.price[1].toLocaleString()
                        : "€ " + carts.price[2].toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="cart-page-info-3">
                  <div className="cart-page-info-3a">
                    {" "}
                    <p>
                      {data.naira
                        ? "₦ " + carts.price[0].toLocaleString()
                        : data.dollar
                        ? "$ " + carts.price[1].toLocaleString()
                        : "€ " + carts.price[2].toLocaleString()}
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      data.removeItem(carts.id);
                    }}
                    className="remove-button"
                  >
                    <button>
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="promo">
              <p style={{ marginBottom: "17px" }}>
                <span style={{ marginRight: "8px" }}>
                  <FontAwesomeIcon icon={faTag} />
                </span>
                Enter a promo code
              </p>
              <p>
                <span style={{ marginRight: "8px" }}>
                  <FontAwesomeIcon icon={faNoteSticky} />
                </span>
                Add a note
              </p>
            </div>
          </div>
          <div className="order-summary-div">
            <div className="order-summary">
              <h4>Order Summary</h4>
            </div>
            <div className="cart-page-sub-total">
              <div className="subtotal-div">
                <p>Subtotal</p>
                <p>
                  {" "}
                  {data.naira
                    ? "₦ " + data.total.toLocaleString()
                    : data.dollar
                    ? "$ " + data.total.toLocaleString()
                    : "€ " + data.total.toLocaleString()}{" "}
                </p>
              </div>
              <div className="shipping-div">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
            </div>
            <div className="total-div">
              <div className="total-price">
                <div>
                  <h4>Total</h4>
                </div>
                <div>
                  <p>
                    {" "}
                    {data.naira
                      ? "₦ " + data.total.toLocaleString()
                      : data.dollar
                      ? "$ " + data.total.toLocaleString()
                      : "€ " + data.total.toLocaleString()}{" "}
                  </p>
                </div>
              </div>
              <div className="checkout">
                <button
                  onClick={() => {
                    success();
                  }}
                >
                  Checkout
                </button>
                <p>
                  <span style={{ marginRight: "8px" }}>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  Secure Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
