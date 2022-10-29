import books from "../model/Book.js";

class BooksController {

  static getBooks = (req, res) => {
    books.find()
      .populate('author')
      .populate('publisher')
      .exec((err, books) => {
        if (!err) {
          res.status(200).json(books);
        }

        if (err) {
          res.status(500).send({message: err.message})
        }
    })
  }

  static getBookById = (req, res) => {
    const {id} = req.params;

    books.findById(id)
      .populate('author', 'name')
      .exec((err, books) => {
        if (!err) {
          res.status(200).json(books);
        } 
        
        if (err) {
          res.status(400).send({message: err.message});
        }
      });
  }
  
  static getBookByTitle = (req, res) => {
    const title = req.query.title;

    books.find({'title': title}, {}, (err, books) => {
      res.status(200).json(books);
    })
  }

  static newBook = (req, res) => {
    let book = new books(req.body);

    book.save((err)  => {
      if (!err) {
        res.status(201).json(book.toJSON())
      }

      if (err) {
        res.status(500).send({message: `${err.message} - erro ao cadastrar livro`})
      } 
    })
  }

  static updateBook = (req, res) => {
    const {id} = req.params;

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "livro atualizado com sucesso!"});
      } 
      
      if (err) {
        res.status(500).send({message: err.message});
      }
    })
  }

  static deleteBook = (req, res) => {
    const {id} = req.params;

    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: "Livro deletado com sucesso!"})
      }

      if (err) {
        res.status(404).send({message: `${err.message} - Id do Livro incorreto`})
      }
    })
  }

}

export default BooksController;
