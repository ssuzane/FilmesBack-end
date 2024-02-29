/*******************************************************************************************
 * Objetivo: Arquivo para realizar as requisições de filmes
 * Data: 30/01/2024
 * Autor: Marcel
 * Versão: 1.0
***********************************************************************************************/

/*
    Para realizar o acesso a Banco de Dados precisamos instalar algumas bibliotecas:

        - SEQUELIZE     - É uma biblioteca mais antiga
        - PRISMA ORM    - É a biblioteca mais atual (será utilizada no projeto)
        - FASTFY ORM    - É a biblioteca mais atual

        Para instalar o PRISMA:
            - npm install prisma --save   (Irá realizar a conexão com BD)
            - npm install @prisma/client --save (Irá executar os scripts SQL no BD)
        
        Após a instalação das bibliotecas, devemos inicializar o prisma no projeto:
            - npx prisma init

*/



//Import das bibliotecas do projeto 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Cria um objeto app tendo como referencia a classe do express
const app = express();


app.use((request, response, next)=>{

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET');
    app.use(cors());
    next();
});

/***************************  Import dos arquivos da controller do projeto *************/
    const controllerFilmes = require('./controller/controller_filme.js');

  
 
 /************************************************************************************/


//EndPoint: Versão 1.0 - retorna todos os filmes do arquivo filmes.js
            //Período de funcionamento: 01/2024 até 02/2024
app.get('/v1/acmefilmes/filmes', cors(), async function(request, response){

    let controllerFilmes = require('./controller/funcoes.js');

    let filmes = controllerFilmes.getFilmes();
    if (filmes){
        response.json(filmes);
        response.status(200);
    }else{
        response.status(404);
    }


});

//EndPoint: Versão 2.0 - retorna todos os filmes do Banco de Dados
          //Período de funcionamento: 02/2024
app.get('/v2/acmefilmes/filmes', cors(), async function(request, response){

    //chama a função da controller para retornar os filmes
    let dadosFilmes = await controllerFilmes.getListarFilmes();

    //Validação para retornar o JSON dos filmes ou retornar 404
    if(dadosFilmes){
        response.json(dadosFilmes);
        response.status(200);
    }else{
        response.json({message: 'Nenhum registro foi encontrado'});
        response.status(404);
    }
});

//EndPoint: Retorna o filme filtrando pelo ID
app.get('/v2/acmefilmes/filme/:id', cors(), async function(request, response){

    //Recebe o id da requisição
    let idFilme = request.params.id;

    //Encaminha o ID para a controller buscar o Filme
    let dadosFilme = await controllerFilmes.getBuscarFilme(idFilme);

    response.status(dadosFilme.status_code);
    response.json(dadosFilme);
});

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardadndo requisições');
});