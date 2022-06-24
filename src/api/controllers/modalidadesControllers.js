const Modalidades = require('../models/modalidadesModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const modalidades = await Modalidades.findAll();
        return resposta.json(modalidades);
    },


    async store(req, res) {
       const modalidades = await Modalidades.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { mod_descricao } = req.body
        await Modalidades.update({
            mod_descricao
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Modalidade atualizada com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Modalidades.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Modalidade excluida com sucesso!"
        })
    },

}


