import publishers from "../model/Publisher.js";

class PublishersController {

  static getPublishers = (req, res) => {
    publishers.find((err, publishers) => {
      res.status(200).json(publishers)
    })
  }

  static getPublisherById = (req, res) => {
    const {id} = req.params;

    publishers.findById(id, (err, publishers) => {
      if (!err) {
        res.status(200).json(publishers);
      }

      if (err) {
        res.status(400).send({message: `${err.message} - Id indormado incorreto`})
      }
    })
  }

  static newPublisher = (req, res) => {
    let publisher = new publishers(req.body);

    publisher.save((err) => {
      if (!err) {
        res.status(201).json(publisher);
      }

      if (err) {
        res.status(500).send({message: `${err.message} - Erro ao cadastrar editora`});
      }      
    })
  }

  static updatePublisher = (req, res) => {
    const {id} = req.params;

    publishers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "Editora atualizada com sucesso!"});
      } 
      
      if (err) {
        res.status(500).send({message: err.message});
      }
    })
  }

  static deletePublisher = (req, res) => {
    const {id} = req.params;

    publishers.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: "Editora deletada com sucesso!"})
      }

      if (err) {
        res.status(404).send({message: `${err.message} - Id da editora incorreto`})
      }
    })
  }
}

export default PublishersController;

