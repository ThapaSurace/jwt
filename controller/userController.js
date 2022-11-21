const User = require("../model/usersModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Something is misssing" });

  const duplicate = await User.findOne({ username: username });
  if (duplicate) return res.sendStatus(409);

  const hashPwd = await bcrypt.hash(password, 10);
  try {
    const result = await User.create({
      username: username,
      password: hashPwd,
    });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
  }
};


// delete user

const deleteUser = async (req,res) => {
  const user = await User.findByIdAndRemove(req.params.id)
  if(!user){
    res.status(400).json({error:"User not found"})
  }else{
    res.status(200).json({message:"User deleted from db"})
  }
}

module.exports = { createUser,deleteUser };
