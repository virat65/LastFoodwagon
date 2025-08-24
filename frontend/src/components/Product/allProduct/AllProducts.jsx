import React, { useEffect, useState } from "react";
import axios from "axios";
import productRouting from "../productRouting";
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const getAllProduct = async () => {
    try {
      // const allProductForm = new FormData();
      // allProductForm.append("image", info.image);
      const allproducts = await axios.get(productRouting.allProduct.url);
      const productDetails = allproducts.data.body;
      console.log(allproducts.data.body, "alll");
      console.log(allproducts, "allproducts");
      // const productDetails = allproducts.data.body;
      setInfo(productDetails);
    } catch (error) {
      console.log(error, "error in allproduct ");
    }
  };
  // console.log(getAllProduct,"productsssss")
  useEffect(() => {
    getAllProduct();
  }, {});
  const navigtedId = (iddd) => {
    navigate(`/productview/${iddd}`);
  };
  const deleteId = (idd) => {
    navigate(`/productdelete/${idd}`);
  };
  return (
    <>
      th
      <div className="mt-5 pt-5 px-2">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">📦 Product List</h1>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Status</th>{" "}
                <th className="p-2 border">View product </th>
                <th className="p-2 border">Delete product </th>
              </tr>
            </thead>
            <tbody>
              {info.map((product) => (
                <tr key={product._id} className="text-center hover:bg-gray-100">
                  <td className="p-2 border">
                    <img
                      src={product?.picture}
                      alt={product.name}
                      className="w-16 h-16 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="p-2 border">{product.name}</td>
                  <td className="p-2 border">{product.description}</td>
                  <td className="p-2 border">₹{product.price}</td>
                  <td className="p-2 border">{product.category}</td>
                  <td className="p-2 border">
                    {product.isActive ? (
                      <span className="text-green-600 font-semibold">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Inactive
                      </span>
                    )}
                  </td>{" "}
                  <td className="p-2 border">
                    <button onClick={() => navigtedId(product?._id)}>
                      Details
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button onClick={() => deleteId(product?._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
