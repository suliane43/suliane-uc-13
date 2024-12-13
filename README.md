# API de Carros - WebAPI

Está é uma API RESTful desenvolvida para o gerenciamento de informações de carros, utilizando **Node.js** e **Express**. A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto inicial de CRUD (Create, Read, Update, Delete),que será expandido no futuro. Este é apenas o escopo inical.

## Funcionalidades

- **GET /**: Retorna a lista completa de carros.
- **GET /:sigla**: Retorna as informações de um carro específico, identificado pela sigla
- **POST /**: Adiciona um novo carro à lista.
- **PUT /:sigla**: Atualiza as informações de um carro específico, identificado pela sigla.
- **DELETE /:sigla**: Remove um carro específico pela sigla.

## Estrutura do Projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **tabelacarros.js**: Contém a lista de carros (dados fictícios).
- **validacao.js**: Contém as validações Joi para os dados dos carros.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponíveis.

#### Exemplo de Resposta:

```json
[
  {
    "nome": "Ferrari",
    "sigla": "FER",
    "velocidadeMaxima": 340,
    "potencia": 800,
    "consumo": 5.5,
    "aceleracao": 2.9,
    "preco": 300000
  },
  {
    "nome": "Lamborghini",
    "sigla": "LAM",
    "velocidadeMaxima": 350,
    "potencia": 770,
    "consumo": 6.2,
    "aceleracao": 2.8,
    "preco": 330000
  }
]
```
### 2.**get /:sigla**
 
 retorna as informações de carro especifico, identificado pela sigla.

 ### exemplo de resposta:

 ´´´json
 {

    "nome": 'ferrari",
    "sigla": "FER"
    "velocidademaxima": 340,
    "potencia": 800,
    "consumo": 5.5,
    "preco": 3000
    
 }
 ...

 ### 3 ***POST /***

 Adicina um novo carro á lista.

 ### exemplo de requição

 'post\'

 **contente-type:** application/json

 ´´´jsonn

 {
    "nome": "BWM",
    "sigla": "BMW",
    "velocidademaxima": 200
    "potencia": 500,
    "consumo": 7.5,
    "aceleracao": 4.0,
    "preco": 1200000

 }
 ´´´´json
 "nome": "BMW".
 "sigla": "BMW",
 "velocidademaxima": 200
 "consumo":200
 "acelercao":4.0,
 "preco": 130000

 }
 ´´´

 ### s.**DELETE /:siglas**

 renova um carro especifico pela sigla.

 ### Exemplo de resposta:

 ´´´json

 {
    "nome": "BMW",
    "sigla": "BMW",
    "velocidademaxima":,
    "potencia": 200,
    "consumo": 7.5,
    "acelarçao":4.0,
    "preco" 13000
    
     }
´´´