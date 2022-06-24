const Estados = require('../models/estadosModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const estados = await Estados.findAll();
        return resposta.json(estados);
    },


    async store(req, res) {
       const estados = await Estados.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { est_descricao } = req.body
        const { est_apelido } = req.body
        await Estados.update({
            est_descricao,
            est_apelido
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Estado atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Estados.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Estado excluido com sucesso!"
        })
    },

}


