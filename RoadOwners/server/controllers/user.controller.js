const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { user } = require("../models/index")

module.exports = {
  registerUser:async(req, res) => {
    try {
      const { email, password } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = await user.create({ email, password: hashedPassword })
      res.status(201).json({ id: newUser.id, email: newUser.email })
    } catch (error) {
      console.error("Error during registration:", error)
      res.status(500).json({ message: "Internal server error" })
    }
  },

  loginUser:async(req, res) => {
    try {
      const {email,password } = req.body
      const foundUser =await user.findOne({ where: { email } })
      if (!foundUser || !(await bcrypt.compare(password,foundUser.password))) {
        return res.status(401).json({ message: "Invalid email or password" })
      }
      const token = jwt.sign({ id:foundUser.id },"secretkey", { expiresIn: "1h" })
      res.json({ token })
    } catch (error) {
      console.error("Error during login:", error)
      res.status(500).json({ message: "Internal server error" })
    }
  }
}
