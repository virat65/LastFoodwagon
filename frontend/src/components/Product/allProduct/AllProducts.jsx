import React, { useEffect, useState } from "react";
import axios from "axios";
import productRouting from "../productRouting";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  const getAllProduct = async () => {
    try {
      const allproducts = await axios.get(productRouting.allProduct.url);
      const productDetails = allproducts.data.body;
      setInfo(productDetails);
    } catch (error) {
      console.log(error, "error in allproduct ");
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const navigtedId = (iddd) => {
    navigate(`/productview/${iddd}`);
  };

  const deleteId = (idd) => {
    navigate(`/productdelete/${idd}`);
  };

  return (
    <div className="mt-5 pt-5 mx-4">
      <h1 className="text-2xl font-bold mb-6 text-center">📦 Product List</h1>

      {/* Make table responsive with overflow-x */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-green-600 text-white text-sm sm:text-base">
              <th className="p-2 border">S.NO</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">View</th>
              <th className="p-2 border">Delete</th>
            </tr>
          </thead>

          <tbody>
            {info.map((product, indexx) => (
              <tr
                key={product._id}
                className="text-center hover:bg-gray-100 text-sm sm:text-base"
              >
                <td className="p-2 border">{indexx + 1}</td>
                <td className="p-2 border">
                  <img
                    src={product?.picture}
                    alt={product.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover mx-auto rounded"
                  />
                </td>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border max-w-[150px] truncate sm:whitespace-normal">
                  {product.description}
                </td>
                <td className="p-2 border">₹{product.price}</td>
                <td className="p-2 border">{product.category}</td>
                <td className="p-2 border">
                  {product.isActive ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => navigtedId(product?._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded bg-success text-xs sm:text-sm"
                  >
                    Details
                  </button>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => deleteId(product?._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded bg-danger text-xs sm:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
