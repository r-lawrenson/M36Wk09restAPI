const User = require("./userModel");

// CREATE operation POST route/user/signup
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

// READ operation GET route/user/find
exports.findOneUser = async (req, res) => {
  try {
    // username OR email will return user if exists
    // if username AND email both MUST match to return user
    const user = await User.findOne(req.body);
    if(!user){
      res.status(404).send({ message:`user was not found.` });
    } else {
      res.status(200).send({ message: {id: user.id, user: user.username, email: user.email }});
    }
  } catch (error) {
    console.log(error);
    res.status(550).send({ error: error.message });
  }
};

// READ operation GET route/user/list
exports.listUsers = async (req, res) => {
  try {
    const users = await User.find(req.body);
    if(!users){
      res.status(404).send({ message:`no user data found.` });
    } else {
      res.status(200).send({ users });
    }
  } catch (error) {
    console.log(error);
    res.status(550).send({ error: error.message });
  }
};

// UPDATE operation PATCH 
exports.updateOneUser = async (req, res) => {
  const b = req.body;
  // const id = req.params.id; // can't get id WHY?
  try {
        const user = await User.updateOne(
        // // use email to update username
        { email: b.email },{ username: b.username });

        console.log(`${b.email} has updated username to ${b.username}`);
        res.status(202).send({ message: `${b.email} has updated username to ${b.username}`});
        
        // use username to update email
        // { username: b.username },{ email: b.email });

        // console.log(`${b.username} has updated email to ${b.email}`);
        // res.status(202).send({ message: `${b.username} has updated email to ${b.email}`});
  } catch (error) {
    console.log(error);
    res.status(550).send({ error: error.message });
  };
};

// DELETE operation DELETE
exports.deleteOneUser = async (req, res) => {
  // email AND password required
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
    res.status(500).send({ error: error.message });
  }
};

