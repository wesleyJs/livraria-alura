import mongoose from "mongoose";

const publisherShema = new mongoose.Schema({
  id: {type: String},
  name: {type: String, required: true},
})

const publishers = mongoose.model('publishers', publisherShema);

export default publishers;