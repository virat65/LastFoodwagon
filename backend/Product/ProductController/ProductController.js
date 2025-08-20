import productModel from "../ProductModel/ProductSchme.js";
export const newProduct = async (req, res) => {
  try {

 const findProduct= await productModel.findOne({name:req.body.name})
 if(findProduct){
  return res.json({
    message:"Product Already Exists",
    status:400,
    success:false
  })
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
    return res.json({
      message: "product created",
      status: 200,
      success: true,
      body: products,
    });
  } catch (error) {
    console.log(error, "error in All Product");
  }
};

export const findProductById = async (req, res) => {
  try {
    const product = await productModel.findOne({_id:req.params.id});
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
