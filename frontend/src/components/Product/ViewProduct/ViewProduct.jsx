import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productRouting from "../productRouting.js";

const ViewProduct = () => {
  const [info, setInfo] = useState("");
  const { id } = useParams();
  console.log(id, "id from userParams");
  const getDetails = async () => {
    try {
      const details = await axios.get(
        `${productRouting.viewProduct.url}/${id}`
      );
      console.log(details, "details");
      const productdetails = details.data.body;
      console.log(productdetails, "productdetails ");
      if (productdetails && productdetails.image) {
        productdetails.pic = `${
          import.meta.env.VITE_BACKENDURL
        }/productImages/${productdetails.image}`;
      }
      setInfo(productdetails);
    } catch (error) {
      console.log(error, "Error in getDetails from viewProduct");
    }
  };
  useEffect(() => {
    getDetails();
  }, [id]);
  return (
    <div>
      <div className="bg-amber-100 flex items-center justify-center h-screen px-4 user">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center space-y-4">
          <div className="flex justify-center">
            <img
              src={info.pic}
              alt={info.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-amber-300"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {info.name}
            </h2>
            <p className="text-gray-600">{info.price}</p>
          </div>
          <Link
            to="/allproducts"
            className="p-1  inline-block mt-1 bg-green-500 text-white  rounded-lg hover:bg-amber-600 transition bg-primary "
          >
            Back to Product List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
