const { Model, DataTypes } = require('sequelize');

class Cidades extends Model {
    static init(sequelize) {
        super.init({
            cid_descricao: DataTypes.STRING,
            cid_uf: DataTypes.STRING,
            cid_regiao: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Cidades;

