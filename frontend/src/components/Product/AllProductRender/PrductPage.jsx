import React, { useEffect, useState } from "react";
import axios from "axios";
// import productRouting from "../productRouting.js"
import productRouting from "../productRouting.js";
const PrductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const getAllproducts = async () => {
    const products = await axios.get(productRouting.allProduct.url);
    console.log(products, "products");
    setAllProducts(products.data.body);
  };
  console.log(allProducts, "allProducts");
  useEffect(() => {
    getAllproducts();
  }, []);
  return (
    <>
      <div className="mt-5 pt-5">
<div className="container">
  <div className="row gap-1 justify-content-evenly w-100">

        {allProducts.map((e,index) =>
        (
          <>

{/* {  console.log(e.name)};

<img src={e.picture} alt="" />
<h1>name = {e.name}</h1>
<h1>price = {e.price}</h1>
{console.log(`${e.picture}`)} */}

<div class="card mb-3 col-lg-5 col-11 p-2" key={index}>
      <p>{index+1}</p>
  <div class="row g-0 ">
    <div class="col-md-4">
      <img src={e.picture}  alt="..." className="w-100 img-fluid  rounded-0"/>
      {console.log(e.picture,"picture url")}
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">{e.name}</h5>
        <p class="card-text">{e.category}</p>
        <p class="card-text"><small class="text-body-secondary">{e.description}</small></p>
      </div>
    </div>
  </div>
</div>



          </>

     )
        )}
      </div></div></div>
    </>
  );
};

export default PrductPage;
