import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import productRouting from "../productRouting";
import { toast } from "react-toastify";

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
console.log(id,"id from params")
  const handleDelete = async () => {
    const deletedProduct = await axios.delete(
      `${productRouting.deleteProdct.url}/${id}`
    );
    console.log(deletedProduct, "Deleted Product");
    if (deletedProduct.data.status === 200) {
      toast.success(deletedProduct.data.message);
      navigate("/AllProducts");
    } else {
      toast.error(deletedProduct.data.message);
    }
  };
  const handleCancle = ()=>{
    navigate("/AllProducts")
  }
  return (
    <div className="user-delete-container user d-flex justify-content-center align-items-center ">
      <div className="user-delete-box">
        <h2>Are you sure you want to delete this Product</h2>
        <div className="button-group gap-2 d-flex justify-content-center flex-column  align-items-center">
          <button className="btn btn-danger w-50" onClick={handleDelete}>
            Yes, Delete
          </button>
          <button className="btn btn-secondary w-50" onClick={handleCancle}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
