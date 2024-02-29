
/************************************************** menssagem de error *****************************************/

const ERROR_INVALID_ID = {status: false, status_code: 400, message: 'O ID ncaminhado na requisição não é valido'};

const ERROR_REQUIERED_FIELDS = {status: false, status_code: 400, message: 'existem campos requiridos que não foram preenchidos, ou ateem os criterios de digitaão'};

const ERROR_NOT_FOUND = {status: false, status_code: 404, message: 'Não foram encontrados itens na requisição'};

const ERRO_INTERNAL_SERVER_DB = {status: false, status_code: 500, message: 'Não foi possivel fazer a requisição devido a um problema na comunicação  com o bbanco de dados. Contrate o Administrador!!'};

/************************************************ messagem de sucesso ***************************************/

const SUCESS_CREATED_ITEM =   {status: true, status_code: 201, message: 'Item criado com sucesso!!'};



module.exports ={
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_REQUIERED_FIELDS,
    ERRO_INTERNAL_SERVER_DB,
    SUCESS_CREATED_ITEM
}