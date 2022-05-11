const User = require("./userModel");

// CREATE operation POST
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ message: `${ newUser.username} has been created.`});
    // or return all details if successful
    // res.status(200).send({ user: newUser.username, email: newUser.email, pwd: newUser.pass });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

// READ operation GET
exports.findOneUser = async (req, res) => {
  try {
    const users = await User.findOne(req.body);
    if(!users){
      res.status(404).send(`username not found.`);
    } else {
      res.status(200).send({ id: users.id, email: users.email, user: users.username });
    }
  } catch (error) {
    console.log(error);
    res.status(550).send({ error: error.message });
  }
};

// UPDATE operation 


// DELETE operation DELETE
exports.deleteOneUser = async (req, res) => {
  // username AND password required
  const b = req.body;
  const id = req.params.id;
  try {
    // check email and password are not null
    if(!(b.email && b.password)) {
      res.status(418).send({ message: "Enter an email AND password" });
    } else {
      // if email and password are not null
      const user = await User.findOne({email: b.email});
        // check email exists in database
        if(!user){
          res.status(404).send({ message: `user not found.` });
        } else {
          // if email exists then delete user
          await user.deleteOne(id);
          console.log(`user ${user.email} deleted`);
          res.status(202).send({ message: `user ${user.email} deleted` });
        }
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
    res.status(551).send({ error: error.message });
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