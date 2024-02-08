/* 
 * Autor: Suzane A. hora
 * Objetivo: arquivo responsavel pelo acesso pelo banco de dados SQL, aqui faremos o CRUD na tabela de filmes
 * data: 01;02.24
 * Versão: 1.0
 * 
 ***************************************************/

//import da biblioteca da pasta prisma para manipular os script do SQL
const {PrismaClient} = require('@prisma/client')


//instancia da class prisma client 
const prisma = new PrismaClient();

// função para inserir um filme no BD
const insertFilme = async function(){

}

// função para atualizar um filme no BD
const uptadeFile = async function (){

}

// função para excluir um filme no BD
const deleteFilmes = async function(){

}

// função para listar todos os filmes do BD
const selectAllFilmes = async function(){

    let sql = 'select * from tbm_filmes'

    //queryRawUnsafe = para conseguir pegar as concatenações dos scripts

    //nao esqueça do await
    let rsFilmes = await prisma.$queryRawUnsafe(sql)

    //validação para retornar os dados.
    if(rsFilmes.length > 0)
        return rsFilmes
    else
        return false

}

// função para buscar um filme no BD filtrando pelo ID
const selectById = async function(){

}

// exportando
module.exports = {

    insertFilme,
    uptadeFile,
    deleteFilmes,
    selectAllFilmes,
    selectById

}
