const Controller = require('../controller/offer');
const TenderController = require('../controller/tender');
const { Tender } = require('../model/tender');


const getAllOffersHandler = (req, res) => {
    console.log('all offers')
    Controller.getAllOffer().then(
        result => res.status(200).json(result),
        error => res.status(500).json({"error": error})
    )
}

const getOfferByIdHandler = (req, res) => {
    console.log('offer by id')
    res.status(501).json({"error": "Not implemented"})
}

const createOfferHandler = (req, res) => {
    const offer = req.body;

    if(! offer.TenderId) {
        res.status(400).json({"error": "Offer.TenderId cannot be null"})
        return
    }

    TenderController.getActualTender(id=offer.TenderId).then(
        result => {
            if(result.length == 0) {
                res.status(400).json({"error": "Tender given by Offer.TenderId is not actual."})
                return
            } else {
                Controller.createNewOffer(offer).then(
                    result => res.status(200).json(result),
                    error => res.status(500).json({"error": error})
                )
            }
        },
        error => res.status(500).json({"error": error})
    )

}

module.exports = {
    getAllOffersHandler,
    getOfferByIdHandler,
    createOfferHandler,
}