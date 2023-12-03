/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import NewPage from "./components/NewPage";
import CheckoutProduct from "./components/CheckoutProduct";
import LoginPage from "./components/LoginPage";
import OurCourse from "./components/OurCourse";
import Navbar from "./components/Navbar";
import "./styles/amazon.css";
import { useState } from "react";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ReadMore from "./components/ReadMore";
import Popup from "./Popup";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [showThanksPopup, setShowThanksPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      },1500);
      return;
    }
      setIsOpen(!isOpen);
      setTimeout(() => {
        setIsOpen(isOpen);
      },1500);
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
  return (
    <>
      <Router>
        <Navbar size={cart.length} setShow={setShow} />

        <Routes>
          <Route
            exact
            path="/"
            element={<Home text="Welcome to Vids Tech" />}
          />
          <Route
            exact
            path="/product"
            element={<Amazon handleClick={handleClick} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newpage" element={<NewPage />} />
          <Route exact path="/ourcourse" element={<OurCourse />} />
          <Route exact path="/checkoutproduct" element={<CheckoutProduct />} />
          <Route exact path="/product/:productId" element={<ReadMore />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
        </Routes>
      </Router>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Your Product is Added to the Cart</b>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      {warning && (
        <Popup
          content={
            <>
              <b>Already in Cart</b>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}

export default App;
