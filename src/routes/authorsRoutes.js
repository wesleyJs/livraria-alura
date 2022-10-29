import express from "express";
import AuthoresController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/author", AuthoresController.getAuthors)
  .get("/author/:id", AuthoresController.getAuthorById)
  .post("/author", AuthoresController.newAuthor)
  .put("/author/:id", AuthoresController.updateAuthor)
  .delete("/author/:id", AuthoresController.deleteAuthor)

export default router;
