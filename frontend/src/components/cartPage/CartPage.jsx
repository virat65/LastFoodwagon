import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import cartapi from "../Product/cartRouting";
import { toast } from "react-toastify";

const CartPage = () => {
  const [items, setItems] = useState([]);
  const getcookie = cookie.get("userInfo");
  const tokenGen = getcookie ? JSON.parse(getcookie) : null;

  const getAllitem = async () => {
    try {
      const allitems = await axios.get(cartapi.findAllcartitems.url, {
        headers: { Authorization: `Bearer ${tokenGen.token}` },
      });
      setItems(allitems.data.body || []);
      // console.log(allitems,"allitems")
    } catch (error) {
      console.log("Error in getAllItems", error);
    }
  };

  useEffect(() => {
    getAllitem();
  }, []);

  const updateQuantity = async (id, newQuantity) => {
    try {
      await axios.put(
        `${cartapi.upadecartitem.url}/${id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${tokenGen.token}` } }
      );

      setItems((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        )
      );
      toast.success("upadted qunatity")
    } catch (error) {
      console.log("Error in updateQuantity", error);
    }
  };

  const increaseQuantity = (id, quantity) => updateQuantity(id, quantity + 1);
  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) updateQuantity(id, quantity - 1);
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`${cartapi.deletesignlecartitem.url}/${id}`, {
        headers: { Authorization: `Bearer ${tokenGen.token}` },
      });
  toast.success("Item Removed")
      // Remove item from UI
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Error in removeItem", error);
    }
  };

  const total = items.reduce(
    (sum, item) => sum + (item?.productId?.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div>
      <section className="py-5" style={{ background: "#F9F3EC", minHeight: "100vh" }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-4 text-center">Shopping Cart</h1>
          <div className="table-responsive mb-5">
            <table className="table table-bordered table-hover align-middle bg-white rounded-4 shadow">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={`${import.meta.env.VITE_BACKENDURL}/productImages/${item?.productId?.image}`}
                        alt={item?.productId?.name}
                        style={{
                          width: 48,
                          height: 48,
                          objectFit: "cover",
                          borderRadius: "12px",
                          border: "2px solid #DEAD6F",
                        }}
                      />
                    </td>
                    <td>{item?.productId?.name}</td>
                    <td>₹{item?.productId?.price}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => decreaseQuantity(item._id, item.quantity)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control text-center"
                          value={item.quantity}
                          readOnly
                          style={{ width: 60 }}
                        />
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => increaseQuantity(item._id, item.quantity)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>₹{item?.productId?.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeItem(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end">
            <div className="card p-4 shadow" style={{ minWidth: 320 }}>
              <h4 className="fw-bold mb-3">Cart Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Total Items:</span>
                <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Total Price: </span>
                <span className="fw-bold text-primary fs-5">₹{total}</span>
              </div>
              <button className="btn btn-dark w-100 rounded-3 py-2 mt-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
