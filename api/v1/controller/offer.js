const {Offer} = require('../model/offer');

const getAllOffer = async () => {
    const offers = await Offer.findAll({raw: true})
    return offers
}

const getOfferById = (id) => {
    
}

const createNewOffer = async (offer) => {
    return await Offer.create(offer)
}

module.exports = {
    getAllOffer,
    createNewOffer,
    getOfferById,
}