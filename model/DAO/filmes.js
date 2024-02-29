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

const insertFilme = async function(dadosFilme){
// função para inserir um filme no BD

        try{
                let sql = `insert into tbl_filme (nome,
                                                sinopse,
                                                duracao,
                                                data_lancamento,
                                                data_relancamento,
                                                foto_capa,
                                                valor_unitario
                                                 
                 ) values(
            
                                                '${dadosFilme.nome}',
                                                '${dadosFilme.sinopse}',
                                                '${dadosFilme.duracao}',
                                                '${dadosFilme.data_lancamento}',
                                                ${dadosFilme.data_relancamento}',
                                                '${dadosFilme.foto_capa}',
                                                '${dadosFilme.valor_unitario}',
            
                 )            
                                       
                    )`;
            
                    //$executeRawUnsafe() - serve para executar scripts sem retorno de dados
                    //(insert, updade dele)
                    //$queryRawUnsafe() - serve para executar script com retorno de dados (select)
                                        
                let result = await prisma.$executeRawUnsafe(sql);                                 
            
                if(result)
                    return true;
                else 
                    return false
                    
        } 
        
        catch(error) {
            return false
        }
        
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
