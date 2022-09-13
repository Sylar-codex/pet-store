import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Global_Context/GlobalContext";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Product() {
  const data = useContext(GlobalContext);
  const [showDesc, setShowDesc] = useState(false);
  const [showReturn, setShowReturn] = useState(false);
  let re = "re";
  const showDescFunc = () => {
    setShowDesc((S) => (S = !S));
  };
  const showReturnFunc = () => {
    setShowReturn((S) => (S = !S));
  };
  const addCart = (pet) => {
    const gee = data.cart.some((item) => {
      return item.id === pet.id;
    });
    if (!gee) {
      const newCart = [...data.cart, pet];
      data.setCart([...data.cart, pet]);
      data.notify();
      localStorage.setItem("mycart", JSON.stringify(newCart));
    }
  };
  return (
    <div>
      <Header />
      <div className="prod-top">
        <p>
          <Link style={{ textDecoration: "none", color: "#000000" }} to="/">
            Home /
          </Link>{" "}
          <span>Product</span>
        </p>
      </div>
      <div>
        {data.productItem.map((product) => (
          <div key={product.id}>
            <div className="prod-info">
              <div className="prod-img">
                <LazyLoadImage src={product.images} alt="product" />
              </div>
              <div className="prod-desc">
                <div className="prod-price-div">
                  <div className="prod-name-div">
                    <h4> {product.name} </h4>
                    <p>
                      <span>breed:</span> {product.breed}{" "}
                    </p>
                  </div>
                  <p>
                    {data.naira
                      ? "₦ " + product.price[0].toLocaleString()
                      : data.dollar
                      ? "$ " + product.price[1].toLocaleString()
                      : "€ " + product.price[2].toLocaleString()}
                  </p>
                </div>
                <div className="add-buy-btn">
                  <Link to="/cart">
                    <button
                      onClick={() => {
                        addCart(product);
                      }}
                      className="add"
                    >
                      Add to Cart
                    </button>
                  </Link>
                  <br />
                  <button className="buy">Buy Now</button>
                </div>
                <div>
                  <div className="prod-desc-2">
                    <div className="desc">
                      <h4>DESCRIPTION</h4>
                      <p
                        onClick={() => {
                          showDescFunc();
                        }}
                      >
                        {showDesc ? "-" : "+"}
                      </p>
                    </div>
                    {showDesc && (
                      <div className={re}>
                        <p>{product.description}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="prod-return">
                  <div className="return">
                    <h4>RETURN & REFUND POLICY</h4>
                    <p
                      onClick={() => {
                        showReturnFunc();
                      }}
                    >
                      {showReturn ? "-" : "+"}
                    </p>
                  </div>
                  {showReturn && (
                    <div className={re}>
                      <p>How you go dey return dog my brother man</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginBottom: "30px" }}>
          <Link
            to="/"
            style={{
              color: "#FF0000",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            <p style={{ color: "#FF0000" }}>Go back</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
