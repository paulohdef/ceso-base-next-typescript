

export default class Pessoa {
  #id: string;
  #matricula: string;
  #nome: string;
  #nomeGuerra: string;
  #dataNascimento: string;
  #rg: string;
  #cpf: string;
  #estadoCivil: string;
  // #rg: string
  #imagem: string;
  #dataFalecimento: string;
  #email: string;
  #falecido: string;
  #endereco: string;
  // #numero:
  #cep: string;
  #complemento: string;
  #sexo: string;

  constructor(
    id: string = "",
    matricula: string = "",
    nome: string = "",
    nomeGuerra: string = "",
    dataNascimento: string = "",
    rg: string = "",
    cpf: string = "",
    estadoCivil: string = "",
    imagem: string = "",
    dataFalecimento: string = "",
    email: string = "",
    falecido: string = "",
    endereco: string = "",
    cep: string = "",
    complemento: string = "",
    sexo: string = ""
  ) {
    this.#id = id;
    this.#matricula = matricula;
    this.#nome = nome;
    this.#nomeGuerra = nomeGuerra;
    this.#dataNascimento = dataNascimento;
    this.#rg = rg;
    this.#cpf = cpf;
    this.#estadoCivil = estadoCivil;
    this.#imagem = imagem;
    this.#dataFalecimento = dataFalecimento;
    this.#email = email;
    this.#falecido = falecido;
    this.#endereco = endereco;
    this.#cep = cep;
    this.#complemento = complemento;
    this.#sexo = sexo;
  }

  get id() {
    return this.#id;
  }

  get matricula() {
    return this.#matricula;
  }

  get nome() {
    return this.#nome;
  }

  get nomeGuerra() {
    return this.#nomeGuerra;
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

  get imagem() {
    return this.#imagem;
  }

  get dataFalecimento() {
    return this.#dataFalecimento;
  }

  get email() {
    return this.#email;
  }

  get falecido() {
    return this.#falecido;
  }

  get endereco() {
    return this.#endereco;
  }

  get cep() {
    return this.#cep;
  }

  get complemento() {
    return this.#complemento;
  }

  get sexo() {
    return this.#sexo;
  }

  static vazio() {
    return new Pessoa(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }
}

 
