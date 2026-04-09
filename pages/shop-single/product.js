import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Product = ({ item, addToCart }) => {
  return (
    <div className="row">
      <div className="col col-lg-5 col-12">
        <div className="shop-single-slider">
          <div className="slider-nav">
            <div>
              <Zoom>
                <img
                  src={item.proImg ? item.proImg.src || item.proImg : ""}
                  alt="products"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-7 col-12">
        <div className="product-details">
          <h2>{item.title}</h2>
          <div className="product-rt">
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <span>(25 customer reviews)</span>
          </div>
          <div className="price">
            <span className="current">${item.price}</span>
            <span className="old">${item.delPrice}</span>
          </div>
          <p>
            Designed for durability and optimal patient comfort, this medical equipment is thoroughly tested and certified for clinic or home use.
          </p>
          <ul>
            <li>High-quality materials ensure long-lasting reliability.</li>
            <li>Approved and recommended by healthcare professionals.</li>
            <li>Easy to clean and maintain for hygienic environment.</li>
          </ul>
          <div className="product-option">
            <div className="product-row">
              <button className="theme-btn" onClick={() => addToCart(item)}>
                Add to cart
              </button>
              <div></div>
            </div>
          </div>
          <div className="tg-btm">
            <p>
              <span>Categories:</span> Medical
            </p>
            <p>
              <span>Tags:</span>Medical, Doctor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
