export default class Dependente {
  #id: string;
  #nome: string; 
  #dataNascimento: string;
  #rg: string;
  #cpf: string;
  #estadoCivil: string; 
  #email: string; 
  #sexo: string;

  constructor(
    id: string = "",
    nome: string = "", 
    dataNascimento: string = "",
    rg: string = "",
    cpf: string = "",
    estadoCivil: string = "", 
    email: string = "", 
    sexo: string = ""
  ) {
    this.#id = id;
    this.#nome = nome; 
    this.#dataNascimento = dataNascimento;
    this.#rg = rg;
    this.#cpf = cpf;
    this.#estadoCivil = estadoCivil; 
    this.#email = email; 
    this.#sexo = sexo;
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  } 

  get dataNascimento() {
    return this.#dataNascimento;
  }

  get rg() {
    return this.#rg;
  }

  get cpf() {
    return this.#cpf;
  }

  get estadoCivil() {
    return this.#estadoCivil;
  }

  get email() {
    return this.#email;
  }

  get sexo() {
    return this.#sexo;
  }

  static vazio() {
    return new Dependente("", "", "", "", "", "", "", "");
  }
}
