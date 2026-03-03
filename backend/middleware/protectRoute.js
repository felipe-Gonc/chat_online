import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoute = async (req, res, next) => {

  try {
    console.log("Cookies recebidos:", req.cookies);

    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "sem token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "user não encontrado" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ error: "error interno do server" });
  }
};

export default protectRoute;

/*

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "Sem token, não autorizado" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Erro no middleware protectRoute:", error.message);
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
};




 */
