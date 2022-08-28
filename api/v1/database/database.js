const {Sequelize} = require('sequelize');
var tenderModel = require('../model/tender')
var offerModel = require('../model/offer')

async function initialize() {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'db.sqlite'
    });

    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
    const Tender = tenderModel.initModel(sequelize)
    const Offer = offerModel.initModel(sequelize)
    // Update relations between models
    Tender.hasMany(Offer)
    Offer.belongsTo(Tender)
    // Sync all models with actual creation in db
    await Offer.sync({sync: true})
    await Tender.sync({sync: true})
}

module.exports = initialize