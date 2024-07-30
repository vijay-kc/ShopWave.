const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

//create new user
const createUser = async (userData) => {
  try {
    // userData
    let { firstName, lastName, email, password } = userData;
    // to check user data exist or not
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      // console.log("email",email);
      throw new Error("User Already Exist With This Email");
    }
    password = await bcrypt.hash(password, 8);
    const user = await User.create({ firstName, lastName, email, password });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// finding user by id
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("User Not Found With This Email");
    }
    return user;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

// finding user by email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User Not Found With This Email");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// getting  user by token
const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = await findUserById(userId);
    if (!user) {
      throw new Error("User Not Found With This Email");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// to get all user
const getAllUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUser,
};


// error why variable is not sent by throw