const mongoose = require("mongoose");
const slug = require("slug");

// Schema
const { Schema } = mongoose;

// Adicionando o Schema
const portfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: function(){return slug(this.title)}
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Esse "portfolio" é como se fosse um elemento dentro de uma tabela e ele vai então respeitar esse esquema, ex: ("nome do model", esquema)
module.exports = mongoose.model("portfolio", portfolioSchema);
