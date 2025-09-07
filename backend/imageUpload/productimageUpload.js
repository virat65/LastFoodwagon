const productsImageUpload = (file, folder = "productImages") => {
  try {
    const fileExtension = file.name.split(".").pop();
    console.log(fileExtension, "fileExtension");
    const fileName = Math.random().toString(36).substring(2);
  
    console.log(fileName, "fileName");
    const imageName = fileName + "." + fileExtension;
    console.log(imageName, "imageName");
    file.mv(`Public/${folder}/${imageName}`);
    return imageName
  } catch (error) {
    console.log(error, "Error in productImage upload");
  }
};

export default productsImageUpload;
