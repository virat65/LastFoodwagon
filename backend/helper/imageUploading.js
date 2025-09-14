const imageUpload = (file, folder = "images") => {
  try {
    const fileExtension = file.name.split(".").pop();
    console.log(fileExtension, "fileExtension");

    const fileName = Math.random().toString(36).substring(2);
    console.log(fileName, "fileName");

    const imageName = fileName + "." + fileExtension;
    console.log(imageName, "imagName");
    file.mv(`Public/${folder}/${imageName}`);return imageName
  } catch (error) {
    console.log(error, "error in imageUpload");
  }
};
export default imageUpload;
