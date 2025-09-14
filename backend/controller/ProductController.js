// import productsImageUpload from "../helper/productimageUpload.js";

// import productModel from "../model/ProductSchme.js";

// export const newProduct = async (req, res) => {
//   try {
//     const productname = req.body.name;
//     console.log(productname, "productname");
//     const findProduct = await productModel.findOne({ name: req?.body?.name });

//     if (findProduct) {
//       return res.json({
//         message: "Product Already Exists",
//         status: 400,
//         success: false,
//       });
//     }
//     console.log(req, "reqqq");
//     console.log(req.body, "req bodyyyyy");
//     console.log(req.files, "req.filessss");
//     if (req.files?.image?.name) {
//       const photo = req.files.image;
//       if (photo) {
//         req.body.image = productsImageUpload(photo);
//       }
//     }
//     const product = await productModel.create(req.body);
//     console.log("product created", product);
//     return res.json({
//       message: "product created",
//       status: 200,
//       success: true,
//       body: product,
//     });
//   } catch (error) {
//     console.log(error, "error in create Product");
//   }
// };

// export const AllProducts = async (req, res) => {
//   try {
//     const products = await productModel.find();
//     console.log(products, "products");
//     const allproucts = products.map((e) => {
//       return {
//         ...e.toObject(),
//         picture: `http://localhost:1234/productImages/${e.image}`,
//         // picture: `${process.env.baseurl}/productImages/${e.image}`,
//       };
//     });
//     return res.json({
//       message: "product created",
//       status: 200,
//       success: true,
//       body: allproucts,
//     });
//   } catch (error) {
//     console.log(error, "error in All Product");
//   }
// };

// export const findProductById = async (req, res) => {
//   try {
//     const product = await productModel.findOne({ _id: req.params.iddd });
//     return res.json({
//       message: "Product finded",
//       success: true,
//       status: 200,
//       body: product,
//     });
//   } catch (error) {
//     console.log(error, "Error in findProductById");
//   }
// };
// export const deleteProduct = async (req, res) => {
//   try {
//     // const {id}= req.params
//     // const findProduct = await productModel.findOne(req.body.name);
//     const deletedProduct = await productModel.findByIdAndDelete(req.params.idd);
//     if (deleteProduct) {
//       console.log(deletedProduct, "DEleted product");
//       // console.log(findProduct, "find Product");
//       return res.json({
//         body: deletedProduct,
//         message: "Product deleted successfully",
//         status: 200,
//         success: true,
//       });
//     } else {
//       return res.json({
//         body: deletedProduct,
//         message: "Product not found ",
//         status: 404,
//         success: false,
//       });
//     }
//   } catch (error) {
//     console.log(error, "Error in delteProduct Api");
//   }
// };
import productsImageUpload from "../helper/productimageUpload.js";
import productModel from "../model/ProductSchme.js";

// Create new product
export const newProduct = async (req, res) => {
  try {
    const productname = req.body.name;
    console.log(productname, "productname");

    // check duplicate
    const findProduct = await productModel.findOne({ name: req?.body?.name });
    if (findProduct) {
      return res.json({
        message: "Product Already Exists",
        status: 400,
        success: false,
      });
    }

    console.log(req.body, "req bodyyyyy");
    console.log(req.files, "req.filessss");

    // ✅ Upload image to Cloudinary
    if (req.files && req.files.image) {
      const photo = req.files.image;
      const imageUrl = await productsImageUpload(photo);
      req.body.image = imageUrl; // save Cloudinary URL
    }

    // create product
    const product = await productModel.create(req.body);
    console.log("product created", product);

    return res.json({
      message: "Product created",
      status: 200,
      success: true,
      body: product,
    });
  } catch (error) {
    console.log(error, "error in create Product");
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

// Get all products
export const AllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    console.log(products, "products");

    const allProducts = products.map((e) => {
      return {
        ...e.toObject(),
        picture: e.image, // Cloudinary URL
      };
    });

    return res.json({
      message: "All products fetched",
      status: 200,
      success: true,
      body: allProducts,
    });
  } catch (error) {
    console.log(error, "error in All Product");
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

// Find product by ID
export const findProductById = async (req, res) => {
  try {
    const product = await productModel.findOne({ _id: req.params.iddd });
    return res.json({
      message: "Product found",
      success: true,
      status: 200,
      body: product,
    });
  } catch (error) {
    console.log(error, "Error in findProductById");
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.idd);
    if (deletedProduct) {
      console.log(deletedProduct, "Deleted product");
      return res.json({
        body: deletedProduct,
        message: "Product deleted successfully",
        status: 200,
        success: true,
      });
    } else {
      return res.json({
        message: "Product not found",
        status: 404,
        success: false,
      });
    }
  } catch (error) {
    console.log(error, "Error in deleteProduct Api");
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};
