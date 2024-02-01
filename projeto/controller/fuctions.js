/**
 * Autor: suzane A. Hora
 * objetivo:
 * data:01.02.024
 * versão: 1.0
 */


var acmeFilme = require('../model/filmes.js')


//Função que lista TODOS os filmes e suas informações, sem critério
const getListaDeFilmes = function () {
    let filmes = acmeFilme.filmes.filmes;
    let filmesArray = [];
    let listaFilmes = {};

    filmes.forEach(function (getFilmes) {
        let filmeInfo = {
            id: getFilmes.id,
            nome: getFilmes.nome,
            sinopse: getFilmes.sinopse,
            duracao: getFilmes.duracao,
            data_lancamento: getFilmes.data_lancamento,
            data_relancamento: getFilmes.data_relancamento,
            foto_capa: getFilmes.foto_capa,
            valor: getFilmes.valor_unitario
            
        };

        filmesArray.push(filmeInfo);
    });

    listaFilmes.filmes = filmesArray;

    return listaFilmes;
};

//Função que lista os filmes e suas informações com base em um critério(ID)
const getFilme = function (id) {
    let idFilme = Number(id);
    let filme = acmeFilme.filmes.filmes;
    let filmeArray = [];
    let listaFilme = {};
    let status = false;

    filme.forEach(function (getFilme) {
        if (getFilme.id == idFilme) {
            let filmeInfo = {
                id: getFilme.id,
                nome: getFilme.nome,
                sinopse: getFilme.sinopse,
                duracao: getFilme.duracao,
                data_lancamento: getFilme.data_lancamento,
                data_relancamento: getFilme.data_relancamento,
                foto_capa: getFilme.foto_capa,
                valor: getFilme.valor_unitario
                
            };
       
            filmeArray.push(filmeInfo);
        }
        status = true;
    });

    listaFilme.filmes = filmeArray;

    if (status) {
        return listaFilme
    } else {
        return false
    }
};



module.exports = {
    getListaDeFilmes,
    getFilme
};