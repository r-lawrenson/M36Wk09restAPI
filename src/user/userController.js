const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("./userModel");
// POST request to CREATE a user
exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    // return the username if successful
    res.status(200).send({ user: newUser.username });
    // or return all 3 details if successful
    // res.status(200).send({ user: newUser.username, email: newUser.email, pwd: newUser.pass });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.findUser = async (req, res) => {
  try {
    const users = await User.findOne(req.body) 
      if(users == null){
        res.status(400).send(`username not found.`)
      } else {
        // look for username and return id
        res.status(200).send({ id: users.id, user: users.username })
      }
    } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message })
  }
}; // this code block works now so DON'T edit it rob!

// exports.loginUser = async (req, res) => {
//   try {
//     const check = await User.findOne(req.body) 
      
//     } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: error.message })
//   }
// }; // this code block works now so DON'T edit it rob!