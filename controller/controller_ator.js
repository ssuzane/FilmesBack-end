/**************************************************************************************************** 
 * Autor: Suzane A. hora
 * Objetivo: arquivo resposanvel pela validação, consistencia das requisições da API de filmes
 * data: 01.02.24
 * Versão: 1.0
 * 
 *****************************************************************************************************/

const filmeDAO = require('../model/DAO/ator.js')
const message = require('../modulo/config.js')

//listar todos os atores
const getListarAtores = async function(){

    let atoresJSON = {}

    let dadosAtores = await filmeDAO.selectAllActors()

    if(dadosAtores) {

        atoresJSON.atores = dadosAtores
        atoresJSON.quantidade = dadosAtores.legth
        atoresJSON.status_code = 200

        return atoresJSON
    }else{
        return false
    }

}

module.exports = {
    getListarAtores
}