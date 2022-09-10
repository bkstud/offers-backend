const Controller = require('../controller/tender');

const getAllTendersHandler = (req, res) => {
    Controller.getAllTender().then(
        result => res.status(200).json(result),
        error => res.status(500).json({"error": error})
    )
}

const getActualTendersHandler = (req, res) => {
    Controller.getActualTender().then(
        result => res.status(200).json(result),
        error => res.status(500).json({"error": error})
    ).catch(reason=>{console.log(reason)})
}

const getFinishedTendersHandler = (req, res) => {
    Controller.getFinishedTender().then(
        result => res.status(200).json(result),
        error => res.status(500).json({"error": error})
    ).catch(reason=>{console.log(reason)})
}

const getTenderByIdHandler = (req, res) => {
    const id = req.params.id;
    Controller.getTenderById(id).then(
        result => res.status(200).json(result),
        error => {res.status(500).json({"error": error})}
    ).catch(reason=>{console.log(reason)})
}

const createTenderHandler = (req, res) => {
    const tender = req.body;
    Controller.createNewTender(tender).then(
        result => res.status(200).json(result),
        error => res.status(500).json({"error": error})
    )
}

module.exports = {
    getAllTendersHandler,
    getTenderByIdHandler,
    createTenderHandler,
    getActualTendersHandler,
    getFinishedTendersHandler,
}