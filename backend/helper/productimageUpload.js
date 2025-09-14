// const productsImageUpload = (file, folder = "productImages") => {
//   try {
//     const fileExtension = file.name.split(".").pop();
//     console.log(fileExtension, "fileExtension");
//     const fileName = Math.random().toString(36).substring(2);

//     console.log(fileName, "fileName");
//     const imageName = fileName + "." + fileExtension;
//     console.log(imageName, "imageName");
//     file.mv(`Public/${folder}/${imageName}`);
//     return imageName;
//   } catch (error) {
//     console.log(error, "Error in productImage upload");
//   }
// };

// export default productsImageUpload;


// ---> Cloudinary setup
import cloudinary from "./cloudinary.js";

const productsImageUpload = async (file, folder = "productImages") => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: folder,
    });
    return result.secure_url; // return Cloudinary image URL
  } catch (error) {
    console.log(error, "Error in Cloudinary upload");
  }
};

export default productsImageUpload;
