/**************************************************************************************************************
 * Objetivo: Arquivo responsável pela validação, consistência de dados das 
 *      requisições da API de Filme
 * Data: 01/02/2024
 * Autor: Marcel
 * Versão: 1.0
 * 
 **************************************************************************************************************/

//Import do arquivo de configuração do projeto
const message = require('../modulo/config.js');

//Import do arquivo DAO que fará a comunicação com o Banco de Dados
const filmeDAO = require('../model/DAO/filme.js');

//Função para validar e inserir um novo Filme
const setInserirNovoFilme = async function(){

}

//Função para validar e atualizar um Filme
const setAtualizarFilme = async function(){

}

//Função para excluir um Filme
const setExcluirFilme = async function(){

}

//Função para retornar todos os Filmes
const getListarFilmes = async function(){
    
    //Cria o objeto JSON
    let filmesJSON = {};
    
    //chama a função do DAO para retornar os dados da tabela de Filme
    let dadosFilmes = await filmeDAO.selectAllFilmes();

    //Validação para verificar se existem dados
    if (dadosFilmes){
        //Cria o JSON para devolver para o APP
        filmesJSON.filmes = dadosFilmes;
        filmesJSON.quantidade = dadosFilmes.length;
        filmesJSON.status_code = 200; 
        return filmesJSON;
    }else{
        return false;
    }
}

//Função para buscar um filme pelo ID
const getBuscarFilme = async function(id){

    //Recebe o ID do Filme
    let idFilme = id;
    //Cria o objeto JSON
    let filmesJSON = {};

    //Validação para verificar se o ID é válido 
        //(vazio, indefinido ou não numérico)
    if(idFilme == '' || idFilme == undefined || isNaN(idFilme)){
        return message.ERROR_INVALID_ID; //400
    }else{

        //Encaminha o ID para o DAO buscar no Banco de dados
        let dadosFilme = await filmeDAO.selectByIdFilme(idFilme);

        //Verifica se o DAO retornou dados
        if(dadosFilme){

            //Validação para verificar a quantidade de itens retornados
            if(dadosFilme.length > 0){
                //Cria o JSON para retorno
                filmesJSON.filme = dadosFilme;
                filmesJSON.status_code = 200;

                return filmesJSON;
            }else{
                return message.ERROR_NOT_FOUND; //404
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_DB; //500
        }
    }
}


module.exports = {
    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme
}



