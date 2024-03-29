const mongoose = require("mongoose");
const slug = require("slug");

// Schema
const { Schema } = mongoose;

// Adding the Schema
const portfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      return slug(this.title);
    },
  },
  description: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: [
    {
      label: String,
      icon: String,
      iconType: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Esse "portfolio" é como se fosse um elemento dentro de uma tabela e ele vai então respeitar esse esquema, ex: ("nome do model", esquema)
module.exports = mongoose.model("portfolio", portfolioSchema);
