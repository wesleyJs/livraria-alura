import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({"title":"Curso de node!"});
  })

  app.use(
    express.json(),
    livros,
  )
}

export default routes;
