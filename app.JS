/**************************************
 * Autor: Suzane A. Hora;
 * data: 25/01/2024
 * Versão: 0.1
 *  -> EndPoints. 
 **************************************/

// para realizar o acesso ao banco de dados precisamos instalar algumas biblioteca
// -> SEQUELIZE = é uma biblioteca mais antigas / (PRISMA ORM)- FASTY DRM = blioteca mais altual

/* 

para instala o primas: npm install prisma --save = ira realizar uma conexão com banco de dados 
npm install @prisma/client --save = ira esxecutar os script sqls do banco de dados

pós intalação das bibliotecas devemos inicar o prisma no prjeto

npx prisma init = iniciar o prisma no projeto
*/

//instalações feitas.

const  express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request } = require('http')

const app = express();

//configurações das bibliotecas.

app.use((request, response, next) => {

    response.header('Aceess-Control-Allow-orgin', '*')
    response.header('Aceess-Control-Allow-Methods', 'Get')

    app.use(cors());

    next();

})

// 01 EndPoint: Listar todos os filmes do arquivo
app.get('/v1/AcmeFilmes/ListarFilmes', cors(), async function(request, response){
    let controleListaFilmes = require('./controller/controller_filmes.Js')
    let filmes = controleListaFilmes.getListaDeFilmes();
    response.json(filmes);
    response.status(200);
});
/************************************************************* */

const controllerFilmes = require('./controller/controller_filme.js')

/***************************************************/

//criando um objeto para controlar a chegada dos dados da requisição em formato json
const bodyParserJSON = bodyParser.json

//versão 2.0 retorna todos od filmes do banco de dados
app.get('/v2/AcmeFilmes/listarFilmes', cors(), async function(request, response){

    let dadosFilmes = await controllerFilmes.getBuscarFilmes()

    if(dadosFilmes){
            response.json(dadosFilmes)
            response.status(200)
    }else{
    response.json({message: 'Nenhum registro foi encontrado'})
    response.status(404)
    }   
    
});
    
// 02 Endpoint: Listar os filmes e suas informações com base no id
app.get('/v1/AcmeFilmes/ListarFilmes', cors(), async function(request, response){
    let id = request.query.id
    let controleListaFilmes = require('./controller/controller_function.Js')
    let filmes = controleListaFilmes.getFilme(id);

    if(filmes){
        response.json(filmes);
        response.status(200);
    } else{
        response.status(404)
        response.json({erro:'Item nao encontrado.'})
    }
});

app.post('/v2/acmefilmes/filme', cors(), bodyParserJSON(), async function(request, response){

    //recebe a content-type  como o tipo de dados encaminhado da requisição
    let contentType = request.headers['content-type']

    //recebe dodos os dados da requisição pelo body
    let dadosBody = request.body

    //Encaminhar od dados para o controller enviar para o DAO
    let resultDadosNovoFilme = await controllerFilmes.setInserirNovoFilme(dadosBody, contentType)

    response.status(resultDadosNovoFilme.status_code)
    response.json(resultDadosNovoFilme)
})

app.delete('/v2/acmefilmes/filme/deletar', cors(), async function(request,response){

    
})


app.listen('8080', function(){
    console.log('rodando')
})