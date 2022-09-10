const {DateTime} = require('luxon');
const {Tender} = require('../model/tender');
const {Op} = require('sequelize');

const getAllTender = async() => {
    const tenders = await Tender.findAll({raw: true})
    return tenders
}

const getTenderById = async (id) => {
    const raw = true
    const tenders = await Tender.findAll(
    {
        raw: raw,
        where: {"id": {[Op.eq]: id}}
    })
    return tenders
}

const getActualTender = async(id) => {
    const today = DateTime.local().toISO()
    const raw = true
    var whereConditions = {
        end: {
            [Op.gte]: today
        },
        begin: {
            [Op.lte]: today
        },
    }
    if(id) {
        whereConditions["id"] = id
    }
    const tenders = await Tender.findAll(
    {
        raw: raw,
        where: whereConditions
    })
    return tenders
}

const getFinishedTender = async(id) => {
    const today = DateTime.local().toISO()
    const raw = true
    var whereConditions = {
        end: {
            [Op.lte]: today
        },
    }
    if(id) {
        whereConditions["id"] = id
    }
    const tenders = await Tender.findAll(
    {
        raw: raw,
        where: whereConditions
    })
    return tenders
}


const createNewTender = async (tender) => {
    return await Tender.create(tender)
}


module.exports = {
    getAllTender,
    getTenderById,
    createNewTender,
    getActualTender,
    getFinishedTender,
}