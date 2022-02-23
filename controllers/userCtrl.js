const Users = require("../models/userModel");
const bcrypt = require("bcrypt");


const userCtrl = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new Users({
        username,
        email,
        password: passwordHash,
      });

      await newUser.save();
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = userCtrl;
