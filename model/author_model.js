const { mongoose } = require("../main")

const authorSchema = new mongoose.Schema({
    name: {
        type: String 
    } , 
    year: {
        type : Number
    }, 
    books: [
        {
            type: mongoose.Types.ObjectId , 
            ref: "Book"
        }
    ]
})

module.exports = {authorSchema} 