const cartServer = import.meta.env.VITE_BACKENDURL;
const cartapi = {
  addcart: {
    method: "post",
    url: `${cartServer}/cart/createcart`,

  },
  deletesignlecartitem: {
    method: "delete",
    url: `${cartServer}/cart/deletesinglecart`,
  },
  deleteAllCartiems: {
    method: "delete",
    url: `${cartServer}/cart/deleteallcartitems`,
  },
  upadecartitem: {
    method: "put",
    url: `${cartServer}/cart/updatecartitem`,
  },
  findAllcartitems: {
    method: "get",
    url: `${cartServer}/cart/getallcartitems`,
  },
  findSingleCartitem: {
    method: "get",
    url: `${cartServer}/cart/getcartitem`,
  },
};
export default cartapi;
