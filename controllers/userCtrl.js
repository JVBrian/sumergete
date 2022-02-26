const Users = require("../models/userModel");
const bcrypt = require("bcrypt");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password)
      
        return res
          .status(400)
          .json({ msg: "Por favor rellena todos los campos." });

      if (!validateEmail(email))
        return res.status(400).json({ msg: "Correo invalido" });

      const user = await Users.findOne({ email });
      if (user) return res.status(400).json({ msg: "Este correo ya existe" });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "La contraseña debe tener al menos 6 caracteres" });

      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new Users({
        username,
        email,
        password: passwordHash,
      });

      await newUser.save();

      res.json({
        msg: "Te has registrado correctamente!",
      });
    } catch (err) {
      console.log(err);
    }
  },
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = userCtrl;
