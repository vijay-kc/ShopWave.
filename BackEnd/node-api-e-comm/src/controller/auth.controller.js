const userService = require("../services/user.service");
const jwtProvider = require("../config/jwtProvider");
const bcrypt =require("bcrypt")
const cartService=require("../services/cart.service")

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    console.log("error",user)
    const jwt = jwtProvider.generateToken(user._id);

    await cartService.createCart(user);
    return res.status(200).send({ jwt, message: "Register Success" });
  } catch (error) {
    // console.log(error.message)
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
        return res.status(404).send({message: "User Not Found With This Email" });
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(401).send({ message: "Invalid Password" }); 
    }
    const jwt=jwtProvider.generateToken(user._id);
    return res.status(200).send({ jwt, message: "Login Success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


module.exports={login,register}
