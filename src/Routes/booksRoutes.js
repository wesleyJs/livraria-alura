import express from "express";
import BooksController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BooksController.getBooks)
  .get("/books/search", BooksController.getBookByTitle)
  .get("/books/:id", BooksController.getBookById)
  .post("/books", BooksController.newBook)
  .put("/books/:id", BooksController.updateBook)
  .delete("/books/:id", BooksController.deleteBook)

export default router;
