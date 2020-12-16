import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Navbar from "../../Components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import ProductCard from "../../Components/ProductCard/ProductCard";

function Home() {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState("")
  useEffect(() => {
    setProductData(productDataFromApi);
  }, []);
  useEffect(() => {
    const searchResultData = productDataFromApi.filter(item=>{
      return item.prodCompanyName.toLowerCase().indexOf(searchData) !== -1;
    })
    setProductData(searchResultData);
  }, [searchData]);
  const productDataFromApi = [
    {
      prodCard_img: "/assets/images/prod_image.webp",
      prodCompanyName: "Nike",
      prodName: "Lace-Up Mid-Top Casual Shoes",
      currProd_price: "Rs. 440",
      prod_mrp: "Rs. 999",
      prod_discount: "(56% off)",
    },
    {
      prodCard_img: "/assets/images/prod_image.webp",
      prodCompanyName: "John Players",
      prodName: "Lace-Up Mid-Top Casual Shoes",
      currProd_price: "Rs. 470",
      prod_mrp: "Rs. 999",
      prod_discount: "(56% off)",
    },
    {
      prodCard_img: "/assets/images/prod_image.webp",
      prodCompanyName: "Adidas",
      prodName: "Lace-Up Mid-Top Casual Shoes",
      currProd_price: "Rs. 340",
      prod_mrp: "Rs. 999",
      prod_discount: "(5% off)",
    },
    {
      prodCard_img: "/assets/images/prod_image.webp",
      prodCompanyName: "Bata",
      prodName: "Lace-Up Mid-Top Casual Shoes",
      currProd_price: "Rs. 240",
      prod_mrp: "Rs. 999",
      prod_discount: "(5% off)",
    },
    {
      prodCard_img: "/assets/images/prod_image.webp",
      prodCompanyName: "Paragon",
      prodName: "Lace-Up Mid-Top Casual Shoes",
      currProd_price: "Rs. 140",
      prod_mrp: "Rs. 999",
      prod_discount: "(5% off)",
    },
    {
      prodCard_img: "/assets/images/prod_image.webp",
      prodCompanyName: "Ajio",
      prodName: "Lace-Up Mid-Top Casual Shoes",
      currProd_price: "Rs. 440",
      prod_mrp: "Rs. 999",
      prod_discount: "(5% off)",
    },
    {
      prodCard_img: "/assets/images/prod_image.webp",
      prodCompanyName: "John Players",
      prodName: "Lace-Up Mid-Top Casual Shoes",
      currProd_price: "Rs. 440",
      prod_mrp: "Rs. 999",
      prod_discount: "(5% off)",
    },
  ];
  const onSortSelect = (e)=>{
    if(e.target.value === "select"){
        setProductData(productDataFromApi);
    }
    else{
        let sortedData = productDataFromApi.sort((a,b)=>{
            if(e.target.value=== "l2h"){
                return a.currProd_price.split(" ")[1] - b.currProd_price.split(" ")[1]
            }
            if(e.target.value==="h2l"){
                return b.currProd_price.split(" ")[1] - a.currProd_price.split(" ")[1]
            }
        })
        setProductData(sortedData)
    }
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="logoMainSection">
        <div className="d-flex">
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="text" onChange={e=>setSearchData(e.target.value)} placeholder="FIND A POST" />
        </div>
        <div className="text-center">
          <img src="assets/images/logo2x.png" />
        </div>
        <div className="d-flex">
          <a
            className="socialMediaLink"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            <FontAwesomeIcon icon={faFacebookF} size="sm" />
          </a>
          <a className="socialMediaLink">
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </a>
          <a className="socialMediaLink">
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
          <a className="socialMediaLink">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{marginBottom:"2rem"}}>
        <select 
            style={{padding:"1rem", borderRadius:"1rem", border:"2px solid black", outline:"none" }}
            onChange={onSortSelect}>
          <option value="select">Sort by price</option>
          <option value="h2l">High to Low</option>
          <option value="l2h">Low to High</option>
        </select>
      </div>
      <div className="mainProductScreen">
        {productData.map((prod, i) => (
          <ProductCard
            key={i}
            prodCard_img={prod.prodCard_img}
            prodCompanyName={prod.prodCompanyName}
            prodName={prod.prodName}
            currProd_price={prod.currProd_price}
            prod_mrp={prod.prod_mrp}
            prod_discount={prod.prod_discount}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
