const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  short_description: { type: String },
  techs: [{ type: String }],
  url: { type: String },
  image: { type: String },
  repo: { type: String },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
