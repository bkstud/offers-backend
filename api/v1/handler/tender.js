const Controller = require('../controller/tender');

const getAllTendersHandler = (req, res) => {
    console.log(Controller.getAllTender)
    Controller.getAllTender().then(
        result => res.status(200).json(result),
        error => res.status(500).json({"error": error})
    )
}

const getTenderByIdHandler = (req, res) => {
    const id = req.params.id;
    Controller.getTenderById(id).then(
        result => res.status(200).json(result),
        error => {res.status(500).json({"error": error})}
    ).catch(reason=>{console.log(reason)})
}

const createTenderHandler = (req, res) => {

}

module.exports = {
    getAllTendersHandler,
    getTenderByIdHandler,
    createTenderHandler,   
}