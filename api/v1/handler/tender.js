const Controller = require('../controller/tender');
const OfferController = require('../controller/offer');

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

const getTenderResultHandler = (req, res) => {
    const id = req.params.id;
    Controller.getFinishedTender(id).then(
        result => {
            if(result.length == 0) {
                res.status(400).json({"error": "Tender given by id is not finished."})
                return
            } else {
                let tender = result[0]
                OfferController.getOffersForFinishedTender(tender).then(
                    offers => {res.status(200).json(offers)},
                    error => res.status(500).json({"error": error})
                ).catch(reson => {console.error(reson)})
            }
        },
        error => res.status(500).json({"error": error})
    )
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
    getTenderResultHandler,
}