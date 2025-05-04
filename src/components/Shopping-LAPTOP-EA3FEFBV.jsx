import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shopping.css";
import logo from "../assets/logo.webp";
import loginIcon from "../assets/login-icon.png";
import cartIcon from "../assets/cart-icon.png";

const Shopping = () => {
  const [apiData, setApiData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"];
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json));
  }, []);

  const handleHelpContactClick = () => {
    navigate("/help-contact");
  };
  
  

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = storedCart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = storedCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newItem = { ...product, quantity: 1 };
      localStorage.setItem("cart", JSON.stringify([...storedCart, newItem]));
    }
    alert("Product added to cart!");
  };

  const filteredProducts = apiData?.filter((item) => {
    const matchesSearch =
    searchInput === "" ||
    item?.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
    item?.category?.toLowerCase().includes(searchInput.toLowerCase());
    const matchesCategory = selectedCategory === "" || item?.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  }) || [];
  

  const cartCount = JSON.parse(localStorage.getItem("cart") || "[]").length;

  return (
    <div className="main-wrapper">
      
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Brand Logo" />
          <span className="brand-name">ShopNest</span>
        </div>
        <div className="header-left">
          <div className="dropdown">
            <button className="categories-btn" onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
              Categories <span className="dropdown-arrow">▼</span>
            </button>
            {isCategoriesOpen && (
              <div className="dropdown-content">
                <a href="#" key="all" onClick={() => { setSelectedCategory(""); setIsCategoriesOpen(false); }}>
                  All
                </a>
                {categories.map((category, index) => (
                  <a href="#" key={index} onClick={() => { setSelectedCategory(category); setIsCategoriesOpen(false); }}>
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search for products, categories or shops..."
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="header-right">
          <a href="#" className="header-link" onClick={handleHelpContactClick}>Help & Contact</a>
          <button className="icon-btn" onClick={handleLoginClick}>
            <img src={loginIcon} alt="Log In" className="icon" />
          </button>
          <button className="icon-btn" onClick={handleCartClick}>
            <img src={cartIcon} alt="Cart" className="icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </header>

      <div className="product-wrapper">
        {filteredProducts.map((data) => (
          <div key={data?.id} className="product-card">
            <div className="image-wrapper">
            <img src={data?.image} alt={`Product image of ${data?.title}`} className="w-full h-64 object-contain rounded-lg mb-4"/>
            </div>
            <div>
              <h3 className="product-name">{data?.title}</h3>
              <div className="cat-price-wrapper">
                <span className="product-category">{data?.category}</span>
                <span className="product-price">${data?.price}</span>
              </div>
              <button className="add-to-cart-btn" onClick={() => addToCart(data)} aria-label={`Add ${data?.title} to cart`}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;