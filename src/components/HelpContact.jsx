import React from "react";
import "./helpcontact.css";

const HelpContact = () => {
  return (
    <div className="help-container">
      <h1>Help & Contact</h1>
      <section className="website-info">
        <h2>About ShopNest</h2>
        <p>
          ShopNest is your one-stop online shopping destination, offering a wide range of products
          including electronics, clothing, and more. Launched in 2023, we aim to provide a seamless
          shopping experience with top-quality items and excellent customer service.
        </p>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> support@shopnest.com</p>
        <p><strong>Phone:</strong> +1-800-555-0123</p>
        <p><strong>Address:</strong> 123 Shopping Lane, E-Commerce City, EC 12345</p>
        <p><strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM (EST)</p>
      </section>
    </div>
  );
};

export default HelpContact;