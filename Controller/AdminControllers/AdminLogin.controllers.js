const owner = require("../../Models/AdminSchema");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.AdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let AdminEmail = await owner.findOne({ email });
    if (!AdminEmail) {
      return res.status(404).json({
        success: false,
        body: "Invalid Id for a Admin",
      });
    }
    try {
      passMatch = await bcrypt.compare(password, AdminEmail.password);
    } catch (e) {
      return res.status(404).json({
        success: false,
        body: "Incorrect Password",
      });
    }
    const payload = { email: AdminEmail.email, id: AdminEmail._id };
    AdminEmail.password = undefined;
    if (passMatch) {
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      AdminEmail.token = token;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        AdminEmail,
        message: "Successfully loged in",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Password incorrect",
      });
    }
  } catch {
    res.status(500).json({
      success: false,
      body: "Unable to Login",
    });
  }
};
