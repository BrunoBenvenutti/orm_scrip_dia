const { Model, DataTypes } = require('sequelize');

class Candidatos extends Model {
    static init(sequelize) {
        super.init({
            pro_nome: DataTypes.STRING,
            can_apelido: DataTypes.STRING,
            can_sexo: DataTypes.STRING,
            can_partido: DataTypes.STRING
        }, { sequelize });

    }
}

module.exports = Candidatos;

