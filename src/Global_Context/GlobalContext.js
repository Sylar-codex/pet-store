import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const GlobalContext = createContext(null);
const { Provider } = GlobalContext;

const DataProvider = ({ children }) => {
  const [naira, setNaira] = useState(true);
  const [dollar, setDollar] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [productItem, setProductItem] = useState([]);
  const [modal, setModal] = useState(false);

  const removeItem = (id) => {
    const del = cart.filter((carts) => {
      return carts.id !== id;
    });
    setCart(del);
    localStorage.setItem("mycart", JSON.stringify(del));
  };

  const getTotal = () => {
    const res = cart.reduce((prev, item) => {
      return naira
        ? prev + item.price[0]
        : dollar
        ? prev + item.price[1]
        : prev + item.price[2];
    }, 0);
    setTotal(res);
  };
  const notify = () => {
    toast("added to cart");
  };

  useEffect(() => {
    const myCart = JSON.parse(localStorage.getItem("mycart"));

    if (myCart !== null) {
      setCart(myCart);
    }
  }, []);

  return (
    <Provider
      value={{
        naira,
        setNaira,
        dollar,
        setDollar,
        cart,
        setCart,
        getTotal,
        removeItem,
        total,
        setTotal,
        productItem,
        setProductItem,
        modal,
        setModal,
        notify,
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalContext, DataProvider };
