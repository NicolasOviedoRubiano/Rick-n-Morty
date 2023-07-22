let axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

//*getCharacterById para el servidor de express
async function getCharById(req, res) {
  const id = req.params.id;
  try {
    const { data } = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (data.name) {
      let { name, gender, species, origin, image, status } = data;
      let character = {
        id,
        name,
        status,
        species,
        origin,
        gender,
        image,
      };
      return res.status(200).json(character);
    } else {
      return res.status(404).send("Not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
// axios(`https://rickandmortyapi.com/api/character/${id}`)
//   .then(({ data }) => {
//     if (data.name) {
//       let { name, gender, species, origin, image, status } = data;
//       let character = {
//         id,
//         name,
//         status,
//         species,
//         origin,
//         gender,
//         image,
//       };
//       return res.status(200).json(character);
//     } else {
//       return res.status(404).send("Not found");
//     }
//   })
//   .catch((error) => {
//     return res.status(500).send(error.message);
//   });

//*getCharacterById para el servidor de HTTP
// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       let { name, gender, species, origin, image, status } = data;
//       let character = {
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//         id,
//       };
//       res.writeHead(200, { "Content-type": "Application/json" });
//       const obj = {
//         msj: "Character found",
//         data: character,
//       };
//       return res.end(JSON.stringify(obj));
//     })
//     .catch((error) => {
//       console.log(error);
//       res.writeHead(500, { "Content-type": "text/plain" });
//       return res.end(error.message);
//     });
// };

module.exports = {
  getCharById,
};
