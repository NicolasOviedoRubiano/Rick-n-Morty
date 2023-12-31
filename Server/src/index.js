require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const { router } = require("./routes/index");
const { conn } = require("./DB_connection");
// const data = require("./utils/data"); //homework web-services
//*Servidor levantado con express
const server = express();
//Middlewares
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
// server.use((req, res, next) => {});
server.use("/rickandmorty", router);
// server.get("/login", (req, res) => {
//   console.log("get del login");
//   res.status(200).send("todo ok");
//   // login(req,res)
// });

conn
  .sync({ force: true })
  .then((value) => {
    server.listen(PORT, () =>
      console.log("Servidor corriendo en el puerto 3001")
    );
  })
  .catch((err) => {
    console.error(err);
  });

//*Servidor levantado con HTTP
// http
//   .createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*"); //cors
//     if (req.url.includes("/rickandmorty/character")) {
//       console.log(req.url);
//       const id = req.url.split("/").at(-1);
//       console.log(id);
//       getCharById(res, id);
//     }
//     // if (req.url.includes("/rickandmorty/character")) {
//     //   const id = req.url.split("/").at(-1);
//     //   const character = data.find((element) => element.id === Number(id));
//     //   const obj = { msg: "ok", character };
//     //   if (character) {
//     //     res.writeHead(200, { "Content-type": "application/json" });
//     //     return res.end(JSON.stringify(obj));
//     //   } else {
//     //     res.writeHead(404, { "Content-type": "text/plain" });
//     //     return res.end({
//     //       msg: "Not Found",
//     //       data: "No encontrada",
//     //     });
//     //   }
//     // }
//   })
//   .listen(PORT);
