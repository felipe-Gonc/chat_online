import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Senha diferentes" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "User já existir" });
    }

    //SENHA CRIPTOGRAFADA

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //FOTO DO USER

    const userProfilePic = `https://ui-avatars.com/api/?name=${userName}`;

    //NOVO USER

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: userProfilePic,
    });

    if (newUser) {
      // GERADOR DE TOKEN
      generateToken(newUser._id, res);

      await newUser.save();

      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "IUser data invalido" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });
    const passwordCorrect = await bcrypt.compare(
      password,
      user?.password || "",
    );

    //VERIFICA INFOS DO USER
    if (!user || passwordCorrect) {
      res.status(400).json({ error: "Credencial invalida" });
    }

    //GERA UM NOVO TOKEN
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({message: "Saiu"})
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: error.message });
  }
};
