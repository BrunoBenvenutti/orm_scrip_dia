const { Model, DataTypes } = require('sequelize');

class Estados extends Model {
    static init(sequelize) {
        super.init({
            est_descricao: DataTypes.STRING,
            est_apelido: DataTypes.STRING            
        }, { sequelize });

    }
}

module.exports = Estados;

