const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  const obj = { access: false };
  users.every((user) => {
    if (user.email === email && user.password === password) {
      obj.access = true;
      return false;
    } else return true;
  });
  res.status(200).json(obj);
}

module.exports = { login };
