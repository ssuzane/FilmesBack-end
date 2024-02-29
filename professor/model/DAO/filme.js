/**************************************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao Banco de dados MySQL, aqui faremos o CRUD na tabela de Filme
 * Data: 01/02/2024
 * Autor: Marcel
 * Versão: 1.0
 * 
 **************************************************************************************************************/

//Import da biblioteca do prisma client para manipular scripts SQL
const { PrismaClient } = require('@prisma/client');

//Instancia da classe PrismaClient
const prisma = new PrismaClient();

//Função para inserir um filme no BD
const insertFilme = async function(){

}

//Função para atualizar um filme no BD
const updateFilme = async function(){

}

//Função para excluir um filme no BD
const deleteFilme = async function(){

}

//Função para Listar todos os filmes do BD
const selectAllFilmes = async function(){

    //Script SQL para o Banco de dados
    let sql = 'select * from tbl_filme';

    //$queryRawUnsafe(sql)
    //$queryRaw('select * from tbl_filme')

    //Executa o script SQL no Banco de dados e recebe o retorno dos dados
    let rsFilmes = await prisma.$queryRawUnsafe(sql);

    //Validação para retornar os dados
    if(rsFilmes.length > 0)
        return rsFilmes;
    else
        return false;
}

//Função para buscar uma filme no BD filtrando pelo ID
const selectByIdFilme = async function(id){
    try {
        //Script SQL para filtrar pelo ID
        let sql = `select * from tbl_filme where id = ${id}`;
    
        //Executa o SQL no Banco de dados
        let rsFilme = await prisma.$queryRawUnsafe(sql);

        return rsFilme;

    } catch (error) {
        return false;
    }
    
    
}

module.exports = {
    insertFilme,
    updateFilme, 
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}