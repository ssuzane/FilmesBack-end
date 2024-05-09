/* 
 * Autor: Suzane A. hora
 * Objetivo: arquivo responsavel pelo acesso pelo banco de dados SQL, aqui faremos o CRUD na tabela de filmes
 * data: 01;02.24
 * Versão: 1.0
 * 
 ***************************************************/

//import da biblioteca da pasta prisma para manipular os script do SQL
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

//função para listar todos os atores do BD
const selectAllActors = async function(){


        let sql = 'select * from tbl_ator'

        //queryRawUnsafe = para conseguir pegar as concatenações dos scripts
    
        //nao esqueça do await
        let rsAtor = await prisma.$queryRawUnsafe(sql)
    
        //validação para retornar os dados.
        if(rsAtor.length > 0)
            return rsAtor
        else (error)
            return false

}

module.exports = {
    selectAllActors
}