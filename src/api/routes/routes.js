const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const categoriasControllers = require('../controllers/categoriasControllers.js')
const departamentosControllers = require('../controllers/departamentosControllers.js')
const cidadesControllers = require('../controllers/cidadesControllers.js')
const cursosControllers = require('../controllers/cursosControllers.js')
const produtosControllers = require('../controllers/produtosControllers.js')
const candidatosControllers = require('../controllers/candidatosControllers.js')
const telefonesControllers = require('../controllers/telefonesControllers.js')
const estadosControllers = require('../controllers/estadosControllers.js')
const timesControllers = require('../controllers/timesControllers.js')
const modalidadesControllers = require('../controllers/modalidadesControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rota de categorias
routes.get('/categorias', categoriasControllers.index)
routes.post('/categorias', categoriasControllers.store)
routes.put('/categorias/:codigo_id', categoriasControllers.update)
routes.delete('/categorias/:codigo_id', categoriasControllers.delete)

// rotas de departamentos
routes.get('/departamentos', departamentosControllers.index)
routes.post('/departamentos', departamentosControllers.store)
routes.put('/departamentos/:codigo_id', departamentosControllers.update)
routes.delete('/departamentos/:codigo_id', departamentosControllers.delete)

// rotas de cidades
routes.get('/cidades', cidadesControllers.index)
routes.post('/cidades', cidadesControllers.store)
routes.put('/cidades/:codigo_id', cidadesControllers.update)
routes.delete('/cidades/:codigo_id', cidadesControllers.delete)

// rotas de cursos
routes.get('/cursos', cursosControllers.index)
routes.post('/cursos', cursosControllers.store)
routes.put('/cursos/:codigo_id', cursosControllers.update)
routes.delete('/cursos/:codigo_id', cursosControllers.delete)

// rotas de produtos
routes.get('/produtos', produtosControllers.index)
routes.post('/produtos', produtosControllers.store)
routes.put('/produtos/:codigo_id', produtosControllers.update)
routes.delete('/produtos/:codigo_id', produtosControllers.delete)

// rotas de candidatos
routes.get('/candidatos', candidatosControllers.index)
routes.post('/candidatos', candidatosControllers.store)
routes.put('/candidatos/:codigo_id', candidatosControllers.update)
routes.delete('/candidatos/:codigo_id', candidatosControllers.delete)

// rotas de telefones
routes.get('/telefones', telefonesControllers.index)
routes.post('/telefones', telefonesControllers.store)
routes.put('/telefones/:codigo_id', telefonesControllers.update)
routes.delete('/telefones/:codigo_id', telefonesControllers.delete)

// rotas de estados
routes.get('/estados', estadosControllers.index)
routes.post('/estados', estadosControllers.store)
routes.put('/estados/:codigo_id', estadosControllers.update)
routes.delete('/estados/:codigo_id', estadosControllers.delete)

// rotas de times
routes.get('/times', timesControllers.index)
routes.post('/times', timesControllers.store)
routes.put('/times/:codigo_id', timesControllers.update)
routes.delete('/times/:codigo_id', timesControllers.delete)

// rotas de modalidades
routes.get('/modalidades', modalidadesControllers.index)
routes.post('/modalidades', modalidadesControllers.store)
routes.put('/modalidades/:codigo_id', modalidadesControllers.update)
routes.delete('/modalidades/:codigo_id', modalidadesControllers.delete)

module.exports = routes

