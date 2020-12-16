import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div>
        <Navbar />
      <div className="d-flex justify-content-around" style={{marginTop:"2rem"}}>
          <div >
              <img style={{position:"sticky"}} src="assets/images/sample.jpg" />
          </div>
        
        <div style={{height:"200vh"}}>
          <p className="prodCompanyName text-center">John Player</p>
          <p className="prodName">Textured Slip-On Casual Shoes</p>
          <p
            className="currProd_price"
            style={{ fontSize: "24px", textAlign: "center", margin: "0px" }}
          >
            Rs. 660
          </p>
          <div className="d-flex justify-content-center">
            <p className="prod_mrp">Rs. 999</p>
            <p className="prod_discount">(56% off)</p>
          </div>
          <p className="text-center" style={{ color: "grey" }}>
            Additional GST may apply
          </p>
          <p className="text-center">
            {" "}
            Select Size <span style={{ color: "grey" }}>(UK)</span>
          </p>
          <div className="d-flex">
            <button className="tempBtn">6</button>
            <button className="tempBtn">7</button>
            <button className="tempBtn">8</button>
            <button className="tempBtn">9</button>
          </div>
          <button className="cartBtn">
            Add to Cart
          </button>
          <button className="wishlistBtn">
              Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
