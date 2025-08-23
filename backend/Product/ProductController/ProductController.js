import productsImageUpload from "../productimageUpload/productimageUpload.js";

import productModel from "../ProductModel/ProductSchme.js";

export const newProduct = async (req, res) => {
  try {
    const findProduct = await productModel.findOne({ name: req?.body?.name });

    if (findProduct) {
      return res.json({
        message: "Product Already Exists",
        status: 400,
        success: false,
      });
    }
    console.log(req, "reqqq");
    console.log(req.body, "req bodyyyyy");
    console.log(req.files, "req.filessss");
    if (req.files?.image?.name) {
      const photo = req.files.image;
      if (photo) {
        req.body.image = productsImageUpload(photo);
      }
    }
    const product = await productModel.create(req.body);
    console.log("product created", product);
    return res.json({
      message: "product created",
      status: 200,
      success: true,
      body: product,
    });
  } catch (error) {
    console.log(error, "error in create Product");
  }
};

export const AllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    console.log(products, "products");
    const allproucts = products.map((e) => {
      return {
        ...e.toObject(),
        picture: `http://localhost:1234/productImages/${e.image}`,
      };
    });
    return res.json({
      message: "product created",
      status: 200,
      success: true,
      body: allproucts,
    });
  } catch (error) {
    console.log(error, "error in All Product");
  }
};

export const findProductById = async (req, res) => {
  try {
    const product = await productModel.findOne({ _id: req.params.id });
    return res.json({
      message: "Product finded",
      success: true,
      status: 200,
      body: product,
    });
  } catch (error) {
    console.log(error, "Error in findProductById");
  }
};
