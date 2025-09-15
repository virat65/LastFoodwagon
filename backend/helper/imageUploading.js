// const imageUpload = (file, folder = "images") => {
//   try {
//     const fileExtension = file.name.split(".").pop();
//     console.log(fileExtension, "fileExtension");

//     const fileName = Math.random().toString(36).substring(2);
//     console.log(fileName, "fileName");

//     const imageName = fileName + "." + fileExtension;
//     console.log(imageName, "imagName");
//     file.mv(`Public/${folder}/${imageName}`);return imageName
//   } catch (error) {
//     console.log(error, "error in imageUpload");
//   }
// };
// export default imageUpload;


import cloudinary from "./cloudinary.js";

const imageUpload = async (file, folder = "images") => {
  try {
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: folder,
      use_filename: true,
      unique_filename: true,
    });

    // result.url contains the Cloudinary URL
    return result.secure_url; // you can save this in your DB
  } catch (error) {
    console.log(error, "error in Cloudinary upload");
    throw error;
  }
};

export default imageUpload;
