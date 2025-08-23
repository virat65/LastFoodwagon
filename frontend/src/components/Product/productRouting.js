const productServer = import.meta.env.VITE_BACKENDURL;
const productRouting = {
  addProduct: {
    url: `${productServer}/product/create`,
    method: "post",
  },
  allProduct:{
    url:`${productServer}/product/allProducts`,
    method:"get"
  }
};
export default productRouting;