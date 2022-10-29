import express from "express";
import PublishersController from "../controllers/publishersController.js";

const router = express.Router();

router
  .get("/publishers", PublishersController.getPublishers)
  .get("/publishers/:id", PublishersController.getPublisherById)
  .post("/publishers", PublishersController.newPublisher)
  .put("/publishers/:id", PublishersController.updatePublisher)
  .delete("/publishers/:id", PublishersController.deletePublisher)

export default router;