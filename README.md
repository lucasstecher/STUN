<h2 align="center"><img src="doc/STUN.png" width="400"></h2>

<p align="center">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/lucasstecher/STUN"/>
  <img alt="Language top" src="https://img.shields.io/github/languages/top/lucasstecher/STUN"/>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/lucasstecher/STUN"/>
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

---

## Descrição:

<p>Este projeto tem o objetivo de criar melhorias no projeto Trunfo criado durante a ImersãoDev da Alura, criando assim uma aplicação mais completa para a participação na Hackathon Programa de Formação do <a href="https://www.fcamara.com.br/">Grupo FCamara</a></p>

<span>Observação: A aplicação é compatível com todos os navegadores web atuais com exceção do Mozilla Firefox e Internet Explorer devido a animações 3D utilizadas na movimentação das cartas (adaptação para o Mozilla Firefox em processo de implementação).</span>

---

<h3 align="center">
  <a href="#pencil-web">Web</a>&nbsp;|&nbsp;
  <a href="#factory-server">Server</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#construction_worker-squad-7">SQUAD-7</a>&nbsp;|&nbsp;
  <a href="#link-como-contribuir">Como Contribuir</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

---

## Preview da aplicação

<img align="center" src="doc/STUN-Inicio.gif" alt="portfolio-vuejs preview" width="1200"></img>

## :pencil: Web

Esta pasta é onde se encontra o front-end da aplicação: Os arquivos HTML - CSS - JS.

## [Acesso a plicação via https://stun.vercel.app](https://stun.vercel.app)
### Pastas do projeto

```
web
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂assets
 ┃ ┗ 📜favicon.ico
 ┣ 📂components
 ┃ ┣ 📜telaJogo.html
 ┃ ┣ 📜telaMultiplayer.html
 ┃ ┣ 📜telaPlacar.html
 ┃ ┗ 📜telaRegras.html
 ┣ 📂css
 ┃ ┣ 📜style-tela-jogo.css
 ┃ ┣ 📜style-tela-multiplayer.css
 ┃ ┣ 📜style-tela-placar.css
 ┃ ┣ 📜style-tela-regras.css
 ┃ ┗ 📜style.css
 ┣ 📂script
 ┃ ┣ 📜background.js
 ┃ ┣ 📜cards.js
 ┃ ┣ 📜interfaceIndex.js
 ┃ ┣ 📜scoreBoard.js
 ┃ ┗ 📜telaJogo.js
 ┗ 📜index.html
```

## :factory: Server

Esta pasta é onde se encontra o back-end da aplicação.

### Pastas do projeto

```
📦server
 ┣ 📂src
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜config.js
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜futebolController.js
 ┃ ┃ ┣ 📜heroController.js
 ┃ ┃ ┣ 📜narutoController.js
 ┃ ┃ ┗ 📜playerController.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜Futebol.js
 ┃ ┃ ┣ 📜Hero.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜Naruto.js
 ┃ ┃ ┗ 📜Player.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜futebolRoute.js
 ┃ ┃ ┣ 📜heroRoute.js
 ┃ ┃ ┣ 📜narutoRoute.js
 ┃ ┃ ┗ 📜playerRoute.js
 ┃ ┗ 📜server.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

#### [Documentação do back-end](server/README.md)

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Bootstrap](https://getbootstrap.com/)

## :construction_worker: SQUAD-7

- [Armando Hector Rodriguez](https://github.com/armandoH99)
- [Emerson Moreira](https://github.com/eemr3)
- [Isac Sousa](https://github.com/meIsacSousa)
- [Lucas Vieira Stecher](https://github.com/lucasstecher)
- [Peterson Cabrini](https://github.com/petersoncabrini)

## :link: Como contribuir

- Faça um Fork do repositório
- Clone o seu repositório
- Crie uma branch com a sua feature
- Faça um commit com suas mudanças
- 'Push' a sua branch
- Ir em Pull Requests do projeto original e criar uma pull request com o seu commit

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Feito com ❤️ pelo #SQUAD-7
