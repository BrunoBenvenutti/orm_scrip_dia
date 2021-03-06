const Departamentos = require('../models/departamentosModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const departamentos = await Departamentos.findAll();
        return resposta.json(departamentos);
    },


    async store(req, res) {
       const departamentos = await Departamentos.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { dep_descricao } = req.body
        await Departamentos.update({
            dep_descricao
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Departamento atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Departamentos.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Departamento excluido com sucesso!"
        })
    },

}


