const productServer = import.meta.env.VITE_BACKENDURL;
const productRouting = {
  addProduct: {
    url: `${productServer}/product/create`,
    method: "post",
  },
  allProduct: {
    url: `${productServer}/product/allProducts`,
    method: "get",
  },
  viewProduct: {
    url: `${productServer}/product/findProductbyid`,
    method: "get",
  },
  deleteProdct: {
    url: `${productServer}/product/deleteProduct`,
    method: "delete",
  },
};
export default productRouting;
