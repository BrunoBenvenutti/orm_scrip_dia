const { Model, DataTypes } = require('sequelize');

class Cursos extends Model {
    static init(sequelize) {
        super.init({
            cur_descricao: DataTypes.STRING,
            cur_area: DataTypes.STRING,
        }, { sequelize });

    }
}

module.exports = Cursos;

