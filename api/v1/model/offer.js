const {DataTypes, Model} = require('sequelize');
const {Tender} = require('./tender')

class Offer extends Model {}

const offerSchema = {
    submitterName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    submitTime: {
        type: DataTypes.DATE,
        allowNull: false
    },

}
const initModel = (sequelize) => {
    Offer.init(offerSchema, {modelName: 'Offer', sequelize})
    return Offer
}

module.exports = {
    Offer,
    initModel
}