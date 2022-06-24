const Cidades = require('../models/cidadesModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const cidades = await Cidades.findAll();
        return resposta.json(cidades);
    },

    async store(req, res) {
       const cidade = await Cidades.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cid_descricao } = req.body
        const { cid_uf } = req.body
        const { cid_regiao } = req.body
        await Cidades.update({
            cid_descricao,
            cid_uf,
            cid_regiao
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Cidade atualizada com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Cidades.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Cidade excluida com sucesso!"
        })
    },
}


