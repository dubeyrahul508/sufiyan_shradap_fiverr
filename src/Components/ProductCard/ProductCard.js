import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    
    <div className="productCardMain">
      <div className="prodCard_img">
        <img src={props.prodCard_img} />
        <Link to="/product_page"><div className="quickView"> QUICK VIEW </div></Link>
      </div>
      <div>
        <p className="prodCompanyName ">{props.prodCompanyName}</p>
        <p className="prodName">{props.prodName}</p>
        <div className="prodCard_info">
          <p className="currProd_price">{props.currProd_price}</p>
          <p className="prod_mrp">{props.prod_mrp}</p>
          <p className="prod_discount">{props.prod_discount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
