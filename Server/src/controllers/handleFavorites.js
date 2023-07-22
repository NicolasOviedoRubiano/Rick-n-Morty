var myFavorites = [];

function postFav(req, res) {
  myFavorites.push(req.body);
  res.json(myFavorites);
}
function deleteFav(req, res) {
  myFavorites = myFavorites.filter((character) => {
    return Number(character.id) !== Number(req.params.id);
  });
  res.json(myFavorites);
}
module.exports = { postFav, deleteFav };
