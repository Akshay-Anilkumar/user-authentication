const Book = require("../models/bookModel");

const createBook = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const { title, author, category, publishedYear } = req.body;
    const book = new Book({ title, author, category, publishedYear });
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res.status(400).json({ message: "Book already added" });
    }
    await book.save();
    res.status(201).json({ message: "Book created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Book creation failed" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

const searchBook = async (req, res) => {
  try {
    const { title, author, category, minYear, maxYear } = req.query;

    const query = {};

    if (title) query.title = { $regex: title, $options: "i" };
    if (author) query.author = { $regex: author, $options: "i" };
    if (category) query.category = { $regex: category, $options: "i" };

    if (minYear && maxYear) {
      query.publishedYear = {
        $gte: parseInt(minYear),
        $lte: parseInt(maxYear),
      };
    }

    const books = await Book.find(query);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error searching books" });
  }
};

const updateBook = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const { bookId } = req.params;
    const { title, author, category, publishedYear } = req.body;
    const book = await Book.findByIdAndUpdate(
      bookId,
      { title, author, category, publishedYear },
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied" });
    }

    const { bookId } = req.params;

    const book = await Book.findByIdAndRemove(bookId);
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.status(201).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

module.exports = { createBook, getBooks, searchBook, updateBook, deleteBook };