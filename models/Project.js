const mongoose = require("mongoose");

const techSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  short_description: { type: String },
  techs: [techSchema],
  url: { type: String },
  image: { type: String },
  repo: { type: String },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
