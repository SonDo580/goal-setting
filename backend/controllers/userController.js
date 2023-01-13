const register = (req, res) => {
  res.json({ message: "Register User" });
};

const login = (req, res) => {
  res.json({ message: "Login User" });
};

const getMe = (req, res) => {
  res.json({ message: "User data" });
};

module.exports = {
  register,
  login,
  getMe,
};
