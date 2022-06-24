const { Model, DataTypes } = require('sequelize');

class Modalidades extends Model {
    static init(sequelize) {
        super.init({
            mod_descricao: DataTypes.STRING 
        }, { sequelize });

    }
}

module.exports = Modalidades;

