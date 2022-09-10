const {DataTypes, Model} = require('sequelize');

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
    TenderId: {
        type: DataTypes.INTEGER,
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