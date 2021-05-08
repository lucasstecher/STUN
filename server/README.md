<h2 align="center"><img src="doc/STUN.png" width="400"></h2>

<h3 align="center">Backend da aplicação STUN</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

---

<p align="center"> Projeto construido para utilizando Node.js e postgreSQL. 
   <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Deploy](#deploy)
- [Testes](#tests)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

API e banco de dados para a aplicação STUN (Super Trunfo). A aplicação é um repositório para gerenciar cartas  e a pontuação dos players.


## 🏁 Iniciando <a name = "getting_started"></a>

### Rotas da Aplicação
- **`players`**
- **`POST /players`**: Rota para cadastrar um novo player

- **`GET /players?limit={limit}`**: Rota para listar todos os players cadastrados ordenados através da pontuação, quando não determinado um valor para limit é retornado o top 3 players.

- **`GET /players/{id}}`**: Rota para listar player utilizando uma busca por id.

- **`DELETE /players/{id}`**: Rota para deletar um player.

- **`PUT /players/{id}`**: Rota para atualizar um player.

- **`Deck Naruto`**
- **`POST /narutoCards`**: Rota para cadastrar uma nova carta para o deck de Naruto.

- **`GET /narutoCards?limit={limit}`**: Rota para listar todas as cartas cadastradas, quando não determinado um valor para limit é retornado as 20 primeiras cartas.

- **`DELETE /narutoCards/{id}`**: Rota para deletar uma carta.

- **`PUT /narutoCards/{id}`**: Rota para atualizar uma carta.

- **`Deck Heróis`**
- **`POST /heroesCards`**: Rota para cadastrar uma nova carta para o deck de Herois.

- **`GET /heroesCards?limit={limit}`**: Rota para listar todas as cartas cadastradas, quando não determinado um valor para limit é retornado as 20 primeiras cartas.

- **`DELETE /heroesCards/{id}`**: Rota para deletar uma carta.

- **`PUT /heroesCards/{id}`**: Rota para atualizar uma carta.

- **`Deck Futebol`**
- **`POST /futebolCards`**: Rota para cadastrar uma nova carta para o deck de Futebol.

- **`GET /futebolCards?limit={limit}`**: Rota para listar todas as cartas cadastradas, quando não determinado um valor para limit é retornado as 20 primeiras cartas.

- **`DELETE /futebolCards/{id}`**: Rota para deletar uma carta.

- **`PUT /futebolCards/{id}`**: Rota para atualizar uma carta.

## 🚀 Deploy<a name = "deploy"></a>

Você pode utilizar a API, está aqui: `https://app-stun.herokuapp.com`

<!-- ![Deploy API](https://i.gyazo.com/a96c1e3481fab9909a8f76f4b10bc3ad.gif) -->

## Como contribuir?

Você pode utilizar esse projeto para 

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências `yarn install` ou `npm install`

Para executar a API localmente, deve-se ter o Postgres e incluir as variáveis de ambiente de acordo com o arquivo config.js para que o Sequelize possa se conectar ao seu banco de dados.

## 🎈 Uso <a name="usage"></a>

```sh
npm start
```
## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org)
- [Postgress](https://www.postgresql.org/)
- [Express](https://expressjs.com/)


## ✍️ Authors <a name = "authors"></a>

👤 **Isac Sousa**

- Github: [@isacsousa](https://github.com/meIsacSousa)
- LinkedIn: [@isacsousa](https://www.linkedin.com/in/meisacsousa/)

👤 **Emerson Moreira**

- Github: [@emersonmoreira](https://github.com/eemr3)
- LinkedIn: [@emersonmoreira](https://www.linkedin.com/in/emerson-moreira/)

👤 **Peterson Cabrini**

- Github: [@petersoncabrini](https://github.com/petersoncabrini)
- LinkedIn: [@petersoncabrini](https://www.linkedin.com/in/petersoncabrini/)

👤 **Lucas Vieira Stecher**

- Github: [@lucasstecher](https://github.com/lucasstecher)
- LinkedIn: [@lucasstecher](https://www.linkedin.com/in/lucas-stecher/)

👤 **Armando Hector Rodriguez**

- Github: [@armandoH](https://github.com/armandoH99)
- LinkedIn: [@armandoH]()