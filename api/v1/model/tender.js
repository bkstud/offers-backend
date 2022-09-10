const {DataTypes, Model} = require('sequelize');

class Tender extends Model {}

const tenderSchema = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    begin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end: {
        type: DataTypes.DATE,
        allowNull: false
    },
    budget: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    institution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
}
const initModel = (sequelize) => {
    Tender.init(tenderSchema, {modelName: 'Tender', sequelize})
    return Tender
}

module.exports = {
    Tender,
    initModel
}