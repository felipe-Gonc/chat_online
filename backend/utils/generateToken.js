import jwt from "jsonwebtoken";


const generateToken = (user, res) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development"
  });
};

export default generateToken;
