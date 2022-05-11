const User = require("./userModel");

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
    // or return all details if successful
    // res.status(200).send({ user: newUser.username, email: newUser.email, pwd: newUser.pass });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.findOneUser = async (req, res) => {
  try {
    const users = await User.findOne(req.body) 
    if(!users){
      res.status(404).send(`username not found.`)
    } else {
      res.status(200).send({ id: users.id, email: users.email, user: users.username })
    }
  } catch (error) {
    console.log(error);
    res.status(550).send({ error: error.message })
  }
};

exports.deleteOneUser = async (req, res) => {
  const b = req.body;
  const id = req.params.id;
  try {
    const user = await User.findOne({username: b.username}) ;
    if(!user){
      res.status(404).send(`username not found.`);
    } else {
      await User.findOneAndDelete(id)
      console.log(`user ${user.username} deleted`);
      res.status(202).send({message: `user ${user.username} deleted`});
    }
  } catch (error) {
    console.log(error);
    res.status(550).send({ error: error.message });
  };
};

exports.login = async (req, res) => {
  try {
    // console.log(`${req.body.username} Logged in`)
    //res.status(204).send(`Logged in successfully`)
  } catch (error) {
    console.log(error);
    res.status(551).send({ error: error.message })
  }
};

// // removed code moved to decrypt // //
// const body = req.body
// const user = await User.findOne({username: body.username}) 
//   if(!user){
//     res.status(450).send({error: `Enter a valid username.`})
//   } else if (!(body.username && body.pass)) {
//     res.status(410).send({ error: "Enter username AND password" });
//   } else {
//     //res.status(300).send(`Call decrypt`)
//     const check = await bcrypt.compare( req.body.pass, User.pass)
//     if(check) {
//         res.status(210).send(`Login`)
//       } else {
//         res.status(510).send(`Login failed`)
//       }
//     next()
//   }