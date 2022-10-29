import authors from "../model/Author.js";

class AuthorsController {

  static getAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors)
    })
  }

  static getAuthorById = (req, res) => {
    const {id} = req.params;

    authors.findById(id, (err, authors) => {
      if (!err) {
        res.status(200).json(authors);
      } 
      
      if (err) {
        res.status(400).send({message: err.message});
      }
    });
  }

  static newAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err)  => {
      if (!err) {
        res.status(201).json(author.toJSON())
      }

      if (err) {
        res.status(500).send({message: `${err.message} - erro ao cadastrar autor`})
      } 
    })
  }

  static updateAuthor = (req, res) => {
    const {id} = req.params;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "autor atualizado com sucesso!"});
      } 
      
      if (err) {
        res.status(500).send({message: err.message});
      }
    })
  }

  static deleteAuthor = (req, res) => {
    const {id} = req.params;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: "autor deletado com sucesso!"})
      }

      if (err) {
        res.status(404).send({message: `${err.message} - Id do autor incorreto`})
      }
    })
  }

}

export default AuthorsController;
