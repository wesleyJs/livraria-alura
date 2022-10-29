import mongoose from "mongoose";

const authorShema = new mongoose.Schema({
  id: {type: String},
  name: {type: String, required: true},
  nationality: {type: String, required: true}
})

const authors = mongoose.model("authors", authorShema);

export default authors;