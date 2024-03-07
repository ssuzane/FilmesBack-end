/**************************************************************************************************** 
 * Autor: Suzane A. hora
 * Objetivo: arquivo resposanvel pela validação, consistencia das requisições da API de filmes
 * data: 01.02.24
 * Versão: 1.0
 * 
 *****************************************************************************************************/

//imports dos arqquivos DAO que fara a conexão com banco de dados
const filmeDAO = require('../model/DAO/filmes')
const message = require('../modulo/config.js')


// função para validar e inserir um novo filme 
const setInserirNovoFilme = async function(dadosFilmes){

    let novoFilmeJSON = {}

    if(dadosFilmes.nome == ''                 || dadosFilmes.nome == undefined             ||dadosFilmes.nome == null             || dadosFilmes.nome.legth > 80             || 
    dadosFilmes.sinopse == ''                 || dadosFilmes.sinopse == undefined          ||dadosFilmes.sinopse == null          || dadosFilmes.sinopse.legth > 65000       ||
    dadosFilmes.duracao == ''           || dadosFilmes.duracao == undefined          || dadosFilmes.duracao == null         || dadosFilmes.duracao.legth > 8           ||
    dadosFilmes.data_lancamento == ''         || dadosFilmes.data_lancamento == undefined  ||dadosFilmes.data_lancamento == null  || dadosFilmes.data_lancamento.legth != 10 ||
    dadosFilmes.foto_capa == ''               || dadosFilmes.foto_capa == undefined        ||dadosFilmes.foto_capa == null        || dadosFilmes.foto_capa.legth > 200       ||
    dadosFilmes.valor_unitario.legth > 6 
    ){
        return message.ERROR_REQUIERED_FIELDS; //400
    }else{

        let validaStatus = false

        //validação da data de relançamento , ja que ela não é obrigatorio no banco de dados 
        if(dadosFilmes.data_relancamento != null && dadosFilmes.data_relancamento !='' && data_relancamento !=undefined){
             //Validar para verificar as a data esta com a data de digitos correto
        if(dadosFilmes.data_relancamento.legth != 10){
            return message.ERROR_REQUIERED_FIELDS; // 400
        }else{
            validaStatus = true
    
        }
        
    }else{
        validaStatus = true

    }

    //validaçãopara verificar s podemos encaminhar os dados para o DAO
    if(validaStatus){
        let novoFilme = await filmeDAO.insertFilme(dadosFilmes);

        //validação para verifivar se o DAO inseriu os dados do BD
        if(novoFilme){

            //Criar o Json de retorno dos dados (201)
            novoFilmeJSON.filme = dadosFilmes
            novoFilmeJSON.status = message.SUCESS_CREATED_ITEM.status
            novoFilmeJSON.status_code = message.SUCESS_CREATED_ITEM.status_code
            novoFilmeJSON.message = message.SUCESS_CREATED_ITEM.message

            return novoFilmeJSON; //201
        }else{
            return message.ERROR_REQUIERED_FIELDS; //500
        }
        
    }
        

}
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
