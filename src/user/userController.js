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
    const users = await User.findOne({})
    // look for username and return id
    res.status(200).send({ user: users.id })
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message })
  }
};

