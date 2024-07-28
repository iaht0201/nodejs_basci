const { Author, Book } = require("../model/index");

const bookControllers = {
  // add author
  addBook: async (req, res) => {
    try {
      // lhoi tao
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        const author = await Author.findById(req.body.author);
        if (author) {
          author.books.push(savedBook._id);
          await author.save(); // Lư
        }
      }
      res.status(200).json(savedBook);
    } catch (error) {
      console.error("Error saving author:", error);
      res.status(500).json(error);
    }
  },
  // get author
  getAllBook: async (req, res) => {
    try {
      const book = await Book.find();
      res.status(200).json(book);
    } catch (error) {
      console.error("Error getting author:", error);
      res.status(500).json(error);
    }
  },
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (error) {
      console.error("Error getting book:", error);
      res.status(500).json(error);
    }
  },
  // UPDATE BOOK
  updateBook: async (req, res) => {
    try {
      // co the dung findByIdAndUpdate
      // cach 1
      // const book = await Book.findById(req.params.id) ;
      // await book.updateOne({$set: req.body});
      const book = await Book.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (book) {
        res.status(200).json("Updated successfuily!");
      } else {
        res.status(404).json("Not found book!");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  // deleteBook
  deleteBook: async (req, res) => {
    try {
      // Xóa ID sách từ tất cả các tài liệu tác giả có chứa sách này
      // vi books la array nen su dụng pull 
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );

      // Xóa sách khỏi cơ sở dữ liệu
      const book = await Book.findByIdAndRemove(req.params.id);

      if (book) {
        res.status(200).json({ message: "Deleted successfully!" });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json(error);
    }
  },
};
module.exports = { bookControllers };
