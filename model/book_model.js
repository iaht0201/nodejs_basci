const { mongoose } = require("../main");

const bookSchema  = new mongoose.Schema(
    {
        name: {
            type : String , 
            require: true 
        }, 
        publishedDate : {
            type: String , 
        } , 
        gennres : { 
            // array String []
            type : [String]
        }, 
        // lien ket voi schema khac bang id 
        author: {
            type: mongoose.Schema.Types.ObjectId , 
            ref : "Author"
        }
    }
); 
module.exports = {bookSchema}