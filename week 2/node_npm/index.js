const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Hola, mi nombre es ${process.env.USER_NAME}`);
});

app.get("/count", (req, res) => {
  const oranges = ["naranja", "naranja"];
  const apples = ["manzana"];
  oranges.forEach((fruit) => {
    console.count(fruit);
  });
  apples.forEach((fruit) => {
    console.count(fruit);
  });

  console.countReset("orange");

  oranges.forEach((fruit) => {
    console.count(fruit);
  });

  res.send(`Console.count`);

});

const server = app.listen(3000, () => console.log("Server ready"));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Proceso terminado");
  });
});
