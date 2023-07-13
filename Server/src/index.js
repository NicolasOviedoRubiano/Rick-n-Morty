const http = require("http");
require("dotenv").config();
const { PORT } = process.env;
const { getCharById } = require("./controllers/getCharById");
// const data = require("./utils/data"); //homework web-services

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //cors
    if (req.url.includes("/rickandmorty/character")) {
      console.log(req.url);
      const id = req.url.split("/").at(-1);
      console.log(id);
      getCharById(res, id);
    }
    // if (req.url.includes("/rickandmorty/character")) {
    //   const id = req.url.split("/").at(-1);
    //   const character = data.find((element) => element.id === Number(id));
    //   const obj = { msg: "ok", character };
    //   if (character) {
    //     res.writeHead(200, { "Content-type": "application/json" });
    //     return res.end(JSON.stringify(obj));
    //   } else {
    //     res.writeHead(404, { "Content-type": "text/plain" });
    //     return res.end({
    //       msg: "Not Found",
    //       data: "No encontrada",
    //     });
    //   }
    // }
  })
  .listen(PORT);
