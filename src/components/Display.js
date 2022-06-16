import React, { useState, useContext, useEffect } from "react";
import Pets from "../data/Pets.js";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Global_Context/GlobalContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Display() {
  const [product, setProduct] = useState(Pets);
  const [all, setAll] = useState(true);
  const [dog, setDog] = useState(false);
  const [cat, setCat] = useState(false);
  const [hamster, setHamster] = useState(false);
  const data = useContext(GlobalContext);

  const filterDog = (animal) => {
    const result = Pets.filter((pet) => {
      return pet.animal === animal;
    });
    setProduct(result);
  };
  const filterCat = (animal) => {
    const result = Pets.filter((pet) => {
      return pet.animal === animal;
    });
    setProduct(result);
  };

  const filterHamster = (animal) => {
    const result = Pets.filter((pet) => {
      return pet.animal === animal;
    });
    setProduct(result);
  };

  useEffect(() => {
    data.getTotal();
  }, [data.total, data.cart, data]);

  const productFilter = (id) => {
    const filterProduct = Pets.filter((pet) => {
      return pet.id === id;
    });
    console.log(filterProduct);
    data.setProductItem(filterProduct);
  };
  const navigate = useNavigate();
  const withoutModal = () => {
    if (window.innerWidth <= 450) {
      navigate("/cart");
      data.setModal(false);
    } else {
      data.setModal(true);
    }
  };

  const addCart = (pet) => {
    const gee = data.cart.some((item) => {
      return item.id === pet.id;
    });
    if (!gee) {
      const newCart = [...data.cart, pet];
      data.setCart([...data.cart, pet]);
      data.setModal(true);
      data.notify();
      localStorage.setItem("mycart", JSON.stringify(newCart));
    }
  };

  return (
    <div>
      <div className="category">
        <div>
          <h3>Category</h3>
        </div>
        <div>
          <ul>
            <li
              onClick={() => {
                setProduct(Pets);
                setAll(true);
                setDog(false);
                setCat(false);
                setHamster(false);
              }}
            >
              All
              <span className={all && "best"}></span>
            </li>
            <li
              onClick={() => {
                filterDog("Dog");
                setAll(false);
                setDog(true);
                setCat(false);
                setHamster(false);
              }}
            >
              Dog
              <span className={dog && "best"}></span>
            </li>
            <li
              onClick={() => {
                filterCat("Cat");
                setAll(false);
                setDog(false);
                setCat(true);
                setHamster(false);
              }}
            >
              Cat
              <span className={cat && "best"}></span>
            </li>
            <li
              onClick={() => {
                filterHamster("Hamster");
                setAll(false);
                setDog(false);
                setCat(false);
                setHamster(true);
              }}
            >
              Hamster
              <span className={hamster && "best"}></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-disp">
        {product.map((pet) => (
          <div key={pet.id}>
            <div className="product-disp-1">
              <div className="img-disp">
                <img
                  onClick={() => {
                    productFilter(pet.id);
                  }}
                  src={pet.images}
                  alt="product"
                />
                <div className="view-btn">
                  <Link to="product">
                    <button
                      onClick={() => {
                        productFilter(pet.id);
                      }}
                    >
                      View more
                    </button>
                  </Link>
                </div>
              </div>
              <div className="product-name">
                <p> {pet.name} </p>
              </div>
              <div className="price">
                {" "}
                {data.naira
                  ? "₦ " + pet.price[0].toLocaleString()
                  : data.dollar
                  ? "$ " + pet.price[1].toLocaleString()
                  : "€ " + pet.price[2].toLocaleString()}{" "}
              </div>
              <div
                onClick={() => {
                  addCart(pet);
                  withoutModal();
                }}
                className="btn-cart"
              >
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.modal && data.total > 0 && (
        <div style={{ display: "flex" }} className="cart-modal-container">
          <div
            style={{ width: "75%" }}
            onClick={() => {
              data.setModal(false);
            }}
          ></div>
          <div className="cart-modal">
            <div className="cart-modal-header">
              <div
                style={{ marginLeft: "18px" }}
                onClick={() => {
                  data.setModal(false);
                }}
              >
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faAngleRight} />{" "}
                </button>
              </div>
              <div>
                <h3>Cart</h3>
              </div>
            </div>
            <div className="cart-modal-info">
              {data.cart.map((carts) => (
                <div className="cart-modal-info-2" key={carts.id}>
                  <div className="cart-mod-img">
                    <img src={carts.images} alt="cart" />
                  </div>
                  <div className="cart-name-price">
                    <div>
                      <p> {carts.name} </p>
                    </div>
                    <div>
                      {" "}
                      {data.naira
                        ? "₦ " + carts.price[0].toLocaleString()
                        : data.dollar
                        ? "$ " + carts.price[1].toLocaleString()
                        : "€ " + carts.price[2].toLocaleString()}{" "}
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      data.removeItem(carts.id);
                    }}
                  >
                    <button className="del-div">
                      <FontAwesomeIcon color="red" icon={faXmarkCircle} />
                    </button>
                  </div>
                </div>
              ))}
              <div style={{ padding: "130px" }}></div>
              <div className="sub-total-div">
                <div className="sub-total">
                  <div>
                    <h3>Sub total</h3>
                  </div>
                  <div>
                    {" "}
                    {data.naira
                      ? "₦ " + data.total.toLocaleString()
                      : data.dollar
                      ? "$ " + data.total.toLocaleString()
                      : "€ " + data.total.toLocaleString()}{" "}
                  </div>
                </div>
                <div className="view-cart-btn">
                  <Link to="cart">
                    <button>View Carts</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;
