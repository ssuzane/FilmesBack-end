/*******************************************************************************
 * Objetivo: Arquivo responsável pela padronização de variáveis globais
 *  utilizadas no projeto
 * Data: 22/02/2024
 * Autor: Marcel
 * Versão: 1.0
 *******************************************************************************/

/************** MENSAGENS DE ERRO *************************************/
const ERROR_INVALID_ID          =   {status: false, status_code: 400, message: 'O ID encaminhado na requisição não é válido !!'};   
const ERROR_NOT_FOUND           =   {status: false, status_code: 404, message: 'Não foram encontrados itens na requisição !! '};   
const ERROR_INTERNAL_SERVER_DB  =   {status: false, status_code: 500, message: 'Não foi possível processar a requisição devido a um problema na comunicação com o Banco de Dados. Contate o Administrador da API !! '};



module.exports = {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB
}