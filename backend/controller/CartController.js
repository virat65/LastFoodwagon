import cartModel from "../model/cartModel.js";
export const createCart = async (req, res) => {
  try {
    const userId = req.user ? req.user._id : req.query.userId;
    const { productId } = req.body;

    // 1. Check if item already exists in cart
    let existingCart = await cartModel.findOne({ userId, productId });

    if (existingCart) {
      // 2. If exists, increase quantity
      existingCart.quantity += 1;
      await existingCart.save();

      return res.json({
        status: 200,
        success: true,
        message: "Product quantity updated",
        body: existingCart,
      });
    } else {
      const cart = await cartModel.create({
        userId: req.user ? req.user._id : req.query.userId,
        productId: req.body.productId,
      });

      console.log(cart, "cart");
      return res.json({
        status: 200,
        success: true,
        message: "Product Addedd Succesfully",
        body: cart,
      });
    }
  } catch (error) {
    console.log(error, "Error in createCart");
    return res.json({
      meesage: "Error in creat cart",
    });
  }
};

export const findAllCartItems = async (req, res) => {
  try {
    const AllCartItems = await cartModel
      .find({ userId: req.user._id })
      .populate("userId")
      .populate("productId");
    console.log(AllCartItems, "All Cart items");
    // const allUser = AllCartItems.map((e) => {
    //   return {
    //     ...e.toObject(),
    //     pic: `${process.env.baseurl}/productImages/${e.image}`,
    //   };
    // });
    // console.log(allUser,"Alluser from Allcartimes")
    return res.json({
      message: "All Cart Item Fetched",
      status: 200,
      success: true,
      body: AllCartItems,
    });
  } catch (error) {
    console.log(error, "Error in FindAllCArt");
    return res.json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};
export const findSingleCartItem = async (req, res) => {
  try {
    const item = await cartModel.findOne(req.params.id);
    return res.json({
      message: "Item Found",
      status: 200,
      success: true,
      body: item,
    });
  } catch (error) {
    console.log(error, "Error in FindSingle cArt Item");
  }
};

export const updateCart = async (req, res) => {
  try {
    const cartitem = await cartModel.findByIdAndUpdate(
      req.params.id,
      { new: true },
      { $set: req.body }
    );
    return res.json({
      message: "cart Updated",
      status: 200,
      success: true,
      body: cartitem,
    });
  } catch (error) {
    console.log(error, "Error in UpdateCart");
    return res.json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

export const deleteSingleCartItem = async (req, res) => {
  try {
    const item = await cartModel.findByIdAndDelete({ _id: req.params.id });
    return res.json({
      message: "Item deleted successfully",
      success: true,
      status: 200,
      body: item,
    });
  } catch (error) {
    console.log(error, "Error in DeleteSigleCArtItem");
  }
};
export const deleteAllCartItems = async (req, res) => {
  try {
    const items = await cartModel.delete();
    console.log("items", items);
    return res.json({
      status: 200,
      success: true,
      message: "Cart items Deleted Successfully",
      body: items,
    });
  } catch (error) {
    console.log(error, "Error in deleteAllCartItems ");
  }
};
