import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import nasalogo from "../Assets/nasalogo.png";
import "./Navbar.css";
import axios from "axios";
import { CartContext } from "./CreateContext";
import useAuth from "../Auth2/useAuth";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { user } = useAuth(); // Use the useAuth hook to get user data
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      // Handle the search results as needed
    } catch (error) {
      console.error('Error searching:', error);
    }
  };
  const cartTooltipText =
  totalQuantity === 0 ? "No items in cart" : `${totalQuantity} items in cart`;

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="left-side">
          <div className="logo">
            <img src={nasalogo} alt="NASA" />
          </div>
          <ul className={`nav-items ${isMenuOpen ? "show" : ""}`}>
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link to="/ProductList">
            <li className="nav-item categories">
  <span>Categories</span>
  <ul className="sub-menu">
    <li>
      <span>Men</span>
      {/* <ul className="sub-sub-menu">
        <li><a href="/men/t-shirts">T-Shirts & Polos</a></li>
        <li><a href="/men/shirts">Shirts</a></li>
        <li><a href="/men/jeans">Jeans & Trousers</a></li>
        <li><a href="/men/jackets">Jackets & Coats</a></li>
        <li><a href="/men/sweaters">Sweaters & Sweatshirts</a></li>
        <li><a href="/men/activewear">Activewear</a></li>
        <li><a href="/men/suits">Suits & Blazers</a></li>
        <li><a href="/men/shorts">Shorts</a></li>
        <li><a href="/men/accessories">Accessories</a></li>
        <li><a href="/men/shoes">Shoes</a></li>
      </ul> */}
    </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <li>
      <span>Women</span>
      {/* <ul className="sub-sub-menu">
        <li><a href="/women/dresses">Dresses</a></li>
        <li><a href="/women/sarees">Sarees</a></li>
        <li><a href="/women/tops">Tops & Blouses</a></li>
        <li><a href="/women/skirts">Skirts</a></li>
        <li><a href="/women/jeans">Jeans & Pants</a></li>
        <li><a href="/women/outerwear">Outerwear</a></li>
        <li><a href="/women/sweaters">Sweaters & Cardigans</a></li>
        <li><a href="/women/activewear">Activewear</a></li>
        <li><a href="/women/lingerie">Lingerie & Sleepwear</a></li>
        <li><a href="/women/accessories">Accessories</a></li>
        <li><a href="/women/shoes">Shoes</a></li>
      </ul> */}
    </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <li>
      <span>Kids</span>
      {/* <ul className="sub-sub-menu">
        <li><a href="/kids/baby-clothing">Baby Clothing</a></li>
        <li><a href="/kids/boys-clothing">Boys' Clothing</a></li>
        <li><a href="/kids/girls-clothing">Girls' Clothing</a></li>
        <li><a href="/kids/tops">Tops & T-Shirts</a></li>
        <li><a href="/kids/bottoms">Bottoms</a></li>
        <li><a href="/kids/outerwear">Outerwear & Jackets</a></li>
        <li><a href="/kids/dresses">Dresses & Rompers</a></li>
        <li><a href="/kids/sleepwear">Sleepwear</a></li>
        <li><a href="/kids/accessories">Accessories</a></li>
        <li><a href="/kids/shoes">Shoes</a></li>
      </ul> */}
    </li>
  </ul>
</li>



            </Link>
            <Link to="/BlogPost">
              <li className="nav-item">Blog</li>
            </Link>
            <Link to="/ContactUs">
              <li className="nav-item">Contact Us</li>
            </Link>
          </ul>
          <div
            className={`burger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        {/* <div className={`search-box ${isMenuOpen ? "hide" : ""}`}>
          <input
            type="text"
            placeholder="Search for products, brands, and more"
            value={searchValue}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </div> */}
         <SearchBar handleSearch={handleSearch} />
        <div className={`menu-icons ${isMenuOpen ? "hide" : ""}`}>
        <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="menu-icon cart-tooltip" />

            <span className="cart-count">{totalQuantity}</span>
          </Link>
          <div className="tooltip-container">
              <FontAwesomeIcon
                icon={faBell}
                className="menu-icon"
              />
              <div className="tooltip">
                No new notifications.. Stay tuned for more!!
              </div>
            </div>

          {/* Conditionally render profile icon or login link */}
          {user ? (
            <div onClick={() => navigate("/Profile")}>
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
            </div>
          ) : (
            <Link to="/Login">
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
