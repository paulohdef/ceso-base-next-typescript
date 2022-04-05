
export default class Requisicao {
    #id: string 
    #guid: string
    #datarequisicao: string
    #datadespacho: string
    #descricao: string
    #situacao: string 
    #departamento: string
    #status: string
    #tipo: string

    constructor(id: string = '',
                guid: string = '',
                datarequisicao: string = '',
                datadespacho: string = '',
                descricao: string = '',
                situacao: string = '',
                departamento: string = '',
                status: string = '',
                tipo: string = '',) {
        this.#id = id
        this.#guid = guid
        this.#datarequisicao = datarequisicao,
        this.#datadespacho = datadespacho,
        this.#descricao = descricao,
        this.#situacao = situacao,
        this.#departamento = departamento,
        this.#status = status,
        this.#tipo = tipo
    } 

    get id(){
        return this.#id
    }

    get guid(){
        return this.#guid
    }    

    get datarequisicao(){
        return this.#datarequisicao
    }

    get datadespacho() {
        return this.#datadespacho
    }

    get descricao() {
        return this.#descricao
    }

    get situacao() {
        return this.#situacao
    }

    get departamento() {
        return this.#departamento
    }

    get status() {
        return this.#status
    }

    get tipo() {
        return this.#tipo
    }

    static vazio() {
        return new Requisicao('' ,'' ,'','','','','','')
    }
}