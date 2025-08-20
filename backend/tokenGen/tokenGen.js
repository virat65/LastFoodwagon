import jwt from "jsonwebtoken";
const tokenGen = async (idd) => {
  try {
    const createToken = jwt.sign({ id: idd }, process.env.secreateKey);
    console.log(createToken, "creatToken");

    const decodeToken = jwt.verify(createToken, process.env.secreateKey);
    console.log(decodeToken, "decodeToken");
    return { createToken, decodeToken };
  } catch (error) {
    console.log(error, "error in tokenGen");
  }
};

export default tokenGen;
