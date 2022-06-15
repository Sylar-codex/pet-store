import React, { useState, useContext } from "react";
import "./header.css";
import logo from "../../Pet images/logo.png";
import { GlobalContext } from "../../Global_Context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  const data = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const getStyle = () => {
    return {
      opacity: show && "1",
    };
  };
  return (
    <div className="header-div">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="currency-cart">
          <div className="currency">
            <p
              onClick={() => {
                setShow((S) => (S = !S));
              }}
            >
              {data.naira ? "NGN" : data.dollar ? "USD" : "EUR"}
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </p>
            <ul style={getStyle()}>
              <li
                onClick={() => {
                  data.setNaira(true);
                  data.setDollar(false);
                }}
              >
                {" "}
                NGN{" "}
              </li>
              <li
                onClick={() => {
                  data.setDollar(true);
                  data.setNaira(false);
                }}
              >
                {" "}
                USD{" "}
              </li>
              <li
                onClick={() => {
                  data.setNaira(false);
                  data.setDollar(false);
                }}
              >
                {" "}
                EUR{" "}
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              data.setModal(true);
            }}
            className="cart-icon"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>{data.cart.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
