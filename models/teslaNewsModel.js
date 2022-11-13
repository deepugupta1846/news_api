import mongoose from "mongoose";

const teslaSchema = new mongoose.Schema({
  author: { type: String, required: false },
  title: { type: String, required: true },
  description: { type: String, required: false },
  url: { type: String, required: true },
  urlToImage: { type: String, required: false },
  publishedAt: { type: String, required: true },
  content: { type: String, required: true },
});

const teslaModel = mongoose.model("tesla", teslaSchema);

export default teslaModel;
