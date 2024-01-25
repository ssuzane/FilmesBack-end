/**************************************
 * Autor: Suzane A. Hora;
 * data: 25/01/2024
 * Versão: 0.1
 *  -> EndPoints. 
 */


//instalações feitas.

const  espress = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request } = require('http')

const app = express();

//configurações das bibliotecas.

appendFile.use((request, request, netx) => {

    response.header('Aceess-Control-Allow-orgin', '*')
    response.header('Aceess-Control-Allow-Methods', 'Get')

    app.use(cors());

    next();

})


//endPoint 01 - retorna os nomes
app.get('V1/filmes/nome', cors(), async function(request, response, next){

    

})