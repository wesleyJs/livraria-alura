import livros from "../model/Livro.js";

class LivrosController {

  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros)
    })
  }

  static listarLivroPorId = (req, res) => {
    const {id} = req.params;

    livros.findById(id, (err, livros) => {
      if (!err) {
        res.status(200).json(livros);
      } 
      
      if (err) {
        res.status(400).send({message: err.message});
      }
    });
  }

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err)  => {
      if (!err) {
        res.status(201).json(livro.toJSON())
      }

      if (err) {
        res.status(500).send({message: `${err.message} - erro ao cadastrar livro`})
      } 
    })
  }

  static atualizarLivro = (req, res) => {
    const {id} = req.params;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "livro atualizado com sucesso!"});
      } 
      
      if (err) {
        res.status(500).send({message: err.message});
      }
    })
  }

  static deletarLivro = (req, res) => {
    const {id} = req.params;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: "Livro deletado com sucesso!"})
      }

      if (err) {
        res.status(404).send({message: `${err.message} - Id do Livro incorreto`})
      }
    })
  }

}

export default LivrosController;