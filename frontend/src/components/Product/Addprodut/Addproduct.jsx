import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import productRouting from "../productRouting";
// import productModel from "../../../../../backend/Product/ProductModel/ProductSchme";
const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  // Handle input changes
  // const handleChange = (e) => {
  //   console.log(e.target, "Eee");
  //   if (e.target.name === "image") {
  //     setProductData({
  //       [e.target.name]: e.target.files[0],
  //     });
  //   } else {
  //     setProductData({
  //       ...productData,
  //       [e.target.name]: e.target.value,
  //     });
  //   }
  // };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(files, "files");
    if (name === "image") {
      setProductData({ ...productData, [name]: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const allProductForm = new FormData();
      allProductForm.append("name", productData.name);
      allProductForm.append("price", productData.price);
      allProductForm.append("description", productData.description);
      allProductForm.append("category", productData.category);
      allProductForm.append("image", productData.image); // actual file
      const product = await axios.post(
        productRouting.addProduct.url,
        allProductForm
      );
      console.log(product, "productssss");
      console.log("Product Added:", productData);
      // toast.success("Product added successfully!");
      if (product.data.status === 200) {
        toast.success(product.data.message);
      } else {
        toast.error(product.data.message);
      }
      // Reset form
      setProductData({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    } catch (error) {
      console.log(error, "Error in handleSubmit of add produt");
    }
  };

  return (
    <div className="container mt-lg-1 mt-5 pt-5 gap-0">
      <h2 className=" text-center mt-5">Add New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded bg-light d-flex flex-column"
      >
        {/* Product Name */}
        <div className="row mb-3 align-items-center">
          <label className="col-sm-3 col-form-label">Product Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Price */}
        <div className="row mb-3 align-items-center">
          <label className="col-sm-3 col-form-label">Price</label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              name="price"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="row mb-3 align-items-center">
          <label className="col-sm-3 col-form-label">Category</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              name="category"
              value={productData.category}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}
        <div className="row mb-3 align-items-center">
          <label className="col-sm-3 col-form-label">Description</label>
          <div className="col-sm-9">
            <textarea
              className="form-control"
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Image */}
        <div className="row mb-3 align-items-center">
          <label className="col-sm-3 col-form-label">Image </label>
          <div className="col-sm-9">
            <input
              type="file"
              className="form-control"
              name="image"
              placeholder="insert pic"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-success w-100">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
