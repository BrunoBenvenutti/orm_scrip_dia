const { Model, DataTypes } = require('sequelize');

class Telefones extends Model {
    static init(sequelize) {
        super.init({
            tel_proprietario: DataTypes.STRING,
            tel_ddd: DataTypes.DECIMAL,
            tel_numero: DataTypes.DECIMAL,
            tel_tipo: DataTypes.STRING
            
        }, { sequelize });

    }
}

module.exports = Telefones;

