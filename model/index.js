const { mongoose } = require("../main");
const { authorSchema } = require("./author_model");
const { bookSchema } = require("./book_model");

// Author 
let Author = mongoose.model("Author", authorSchema)
// Book 
let Book = mongoose.model("Book", bookSchema) ; 
module.exports = {Author , Book } 