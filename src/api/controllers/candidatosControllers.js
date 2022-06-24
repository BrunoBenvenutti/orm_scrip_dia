const Candidatos = require('../models/candidatosModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const candidatos = await Candidatos.findAll();
        return resposta.json(candidatos);
    },


    async store(req, res) {
       const candidatos = await Candidatos.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { can_nome } = req.body
        const { can_apelido } = req.body
        const { can_sexo } = req.body
        const { can_partido } = req.body
        await Candidatos.update({
            can_nome,
            can_apelido,
            can_sexo,
            can_partido  
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Candidato atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Candidatos.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Candidato excluido com sucesso!"
        })
    },

}


