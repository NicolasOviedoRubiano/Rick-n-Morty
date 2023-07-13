let axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      let { name, gender, species, origin, image, status } = data;
      let character = {
        name,
        gender,
        species,
        origin,
        image,
        status,
        id,
      };
      res.writeHead(200, { "Content-type": "Application/json" });
      const obj = {
        msj: "Character found",
        data: character,
      };
      return res.end(JSON.stringify(obj));
    })
    .catch((error) => {
      console.log(error);
      res.writeHead(500, { "Content-type": "text/plain" });
      return res.end(error.message);
    });
};

module.exports = {
  getCharById,
};
