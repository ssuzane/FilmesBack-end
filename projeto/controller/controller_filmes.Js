/**************************************************************************************************** 
 * Autor: Suzane A. hora
 * Objetivo: arquivo resposanvel pela validação, consistencia das requisições da API de filmes
 * data: 01.02.24
 * Versão: 1.0
 * 
 *****************************************************************************************************/

//imports dos arqquivos DAO que fara a conexão com banco de dados
const filmeDAO = require('../model/DAO/filmes')


// função para validar e inserir um novo filme 
const setInserirNovoFilme = async function(){

}

// função para validar e atualizar um filme 
const setAtulizarFilme = async function(){

}


// função para validar e exclui um filme 
const setExcluirFilme = async function(){

}


// função para retornar todos os filmes
const getListarFilmes = async function(){

    //cria o objeto JSON chama a função do DAO para retornar os dados da tabela filme 
    let filmesJSON = {}

    //chamar a função para chamar todos os filmes
    let dadosFilmes = await filmeDAO.selectAllFilmes()

    //vailidacção para verificar se existem dados dos filmes 
    if(dadosFilmes ){

        //cria um JSON para devolve o app 
        filmesJSON.filmes = dadosFilmes
        filmesJSON.quantidade = dadosFilmes.legth
        filmesJSON.status_code = 200

        return filmesJSON

    }else{
        return false
    }
       

}

// função para buscar um filme pelo ID
const getBuscarFilmes = async function(){

}

module.exports = {

    setInserirNovoFilme,
    setAtulizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilmes

}
