const Telefones = require('../models/telefonesModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const telefones = await Telefones.findAll();
        return resposta.json(telefones);
    },


    async store(req, res) {
       const telefones = await Telefones.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { tel_proprietario } = req.body
        const { tel_ddd } = req.body
        const { tel_numero } = req.body
        const { tel_tipo } = req.body
        await Telefones.update({
            tel_proprietario,
            tel_ddd,
            tel_numero,
            tel_tipo
        }, {
            where: { id: codigo_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Telefone atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        
        await Telefones.destroy({
            where: { id: codigo_id }
            
        });

        return res.status(200).send({
            status: 1,
            message: "Telefone excluido com sucesso!"
        })
    },

}


