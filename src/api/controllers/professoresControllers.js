const Professores = require('../models/professoresModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const professores = await Professores.findAll();
        return resposta.json(professores);
    },

    async store(req, res) {
       const professores = await Professores.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { pro_descricao } = req.body
        await Professores.update({
            pro_descricao
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Categoria atualizada com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Categorias.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Categoria excluida com sucesso!"
        })
    },
}


