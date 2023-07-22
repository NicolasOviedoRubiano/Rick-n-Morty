const { getCharById } = require("../controllers/getCharById.js");
const { deleteFav, postFav } = require("../controllers/handleFavorites.js");
const { login } = require("../controllers/login.js");
const express = require("express");
const router = express.Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/login", (req, res) => {
  console.log(login);
  login(req, res);
});
router.post("/fav", (req, res) => {
  postFav(req, res);
});
router.delete("/fav/:id", (req, res) => {
  console.log("delete fav");
  deleteFav(req, res);
});

module.exports = { router };
