const {Sequelize} = require('sequelize');

const {Offer} = require('../model/offer');


const getAllOffer = async () => {
    const offers = await Offer.findAll({raw: true})
    return offers
}

const getOfferById = (id) => {

}

const getOffersForFinishedTender = async (tender) => {
    let where = {
        "TenderId": {[Sequelize.Op.eq]: tender.id},
        "value": {[Sequelize.Op.lte]: tender.budget}
    }

    let order = [['value', 'ASC'], ['submitTime', 'ASC']]

    const offers = await Offer.findAll(
        {
            raw: true,
            where: where,
            order: order
        })
    return offers
}

const createNewOffer = async (offer) => {
    return await Offer.create(offer)
}

module.exports = {
    getAllOffer,
    createNewOffer,
    getOfferById,
    getOffersForFinishedTender,
}