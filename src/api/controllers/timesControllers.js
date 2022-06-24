const Times = require('../models/timesModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const times = await Times.findAll();
        return resposta.json(times);
    },


    async store(req, res) {
       const times = await Times.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { tim_descricao } = req.body
        const { tim_apelido} = req.body
        await Times.update({
            tim_descricao,
            tim_apelido
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Time atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Times.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Time excluido com sucesso!"
        })
    },

}


