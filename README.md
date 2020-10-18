<p align="center"><img src="https://res.cloudinary.com/dozt2izvj/image/upload/v1602890158/Happy/logo_colored_name_pczkj9.svg" width="400"></p>

<p align="center">
    🚧 ... Em Construção ... 🚧
</p>

<p align="center">
    <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/CaioGui123/Happy" />
    <img alt="GitHub Repository Size" src="https://img.shields.io/github/repo-size/CaioGui123/Happy" />
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/CaioGui123/Happy" />
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/CaioGui123/Happy" />
    <img alt="GitHub License" src="https://img.shields.io/github/license/CaioGui123/Happy">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/CaioGui123/Happy?style=social">
</p>

## 💻 Sobre o Projeto

**👧👦 Happy:** é um site que tem o intuíto de trazer alegria para as crianças dos orfanatos da sua cidade.

## :atom: Tecnologias Usadas

- **[Leaflet](https://leafletjs.com/)**/**[React Leaflet](https://react-leaflet.js.org/)** (Biblioteca de mapas para a Web)

- **[Express](https://expressjs.com/pt-br/)** (Construção de aplicações **Web** e **API's**)
- **[TypeORM](https://typeorm.io/#/)** (Fornece recursos relacionados a Banco de Dados)
- **[Yup](https://github.com/jquense/yup)** (Validação de dados)
- **[CORS](http://expressjs.com/en/resources/middleware/cors.html)** (Permite que outras aplicações possam acessar a API)
- **[Multer](https://github.com/expressjs/multer)** (Upload de Arquivos)

## 🚀 Começando

Neste tópico você irá encontrar as instruções para iniciar o projeto da maneira correta.

Primeiro clone este projeto usando os seguintes comandos no Terminal:

```bash
# Clone este repositório
$ git clone https://github.com/CaioGui123/Happy.git
```

### 🎲 Configurando Backend

Entre no diretório do Backend da aplicação com `cd backend`.

Agora vamos instalar as dependências:
```bash
# Instalando as dependências
$ yarn install
```
ou
```bash
# Instalando as dependências
$ npm install
```

Execute as Migrações:

```bash
# Rodando as Migrations
$ yarn typeorm migration:run
```
ou
```bash
# Rodando as Migrations
$ npm run typeorm migration:run
```

Crie um diretório chamado 'uploads' na raiz do projeto:

```bash
# Criando diretório
$ mkdir uploads
```

Inicie o Servidor:

```bash
# Iniciando o Servidor
$ yarn dev
```
ou
```bash
# Iniciando o Servidor
$ npm run dev
```

Com isso você podera acessar a API pela rota: **([http://localhost:3333](http://localhost:3333))**

### 🧭 Configurando Frontend

Entre no diretório do Frontend da aplicação com `cd web`.

Agora vamos baixar o React e outras dependências:

```bash
# Instalando as dependências
$ npm install
```
ou
```bash
# Instalando as dependências
$ yarn install
```

Agora você poderá acessar o site pela rota: **([http://localhost:3000](http://localhost:3000))**

## :pencil: Licença

Este projeto esta sobe a licença MIT.

Feito com 💜 👋
