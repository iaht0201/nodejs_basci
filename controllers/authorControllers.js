const { Author, Book } = require("../model/index");

const authorController = {
  // add author
  addAuthor: async (req, res) => {
    try {
      // tao 1 new author voi required tuong ung voi schema
      const newAuthor = new Author(req.body);
      console.log(newAuthor);
      // luu author vao db
      const savedAuthor = await newAuthor.save();
      // khi nao status == 200 thi tra ra cho nguoi dung
      res.status(200).json(savedAuthor);
    } catch (error) {
      console.error("Error saving author:", error);
      res.status(500).json(error);
    }
  },
  // get author
  getAllAuthor: async (req, res) => {
    try {
      const author = await Author.find();
      res.status(200).json(author);
    } catch (error) {
      console.error("Error getting author:", error);
      res.status(500).json(error);
    }
  },
  getAnAuthor: async (req, res) => {
    try {
      // populate get infor books ra
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (error) {
      console.error("Error getting author:", error);
      res.status(500).json(error);
    }
  },
  updateAuthor: async (req, res) => {
    try {
      // populate get infor books ra
      const author = await Author.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (author) {
        res.status(200).json("Update author succed");
      } else {
        res.status(404).json("Updat fail");
      }
    } catch (error) {
      console.error("Error getting author:", error);
      res.status(500).json(error);
    }
  },
  //delete author
  deleteAuthor: async (req, res) => {
    try {
      // xoa id author ra khoi book, vì không phải mảng nên không dùng pull
      await Book.updateMany({ author: req.params.id }, { author: null });
      const author = await Author.findByIdAndRemove(req.params.id);
    
      if (author) {
        res.status(200).json({ message: "Deleted successfully!" });
      } else {
        res.status(404).json({ message: "Deleted fail!" });
      }
    } catch (error) {
      console.error("Error getting author:", error);
      res.status(500).json(error);
    }
  },
};
module.exports = { authorController };
