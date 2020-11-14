# Delivery Much Tech Challenge - By Samoutinho

### Arquivos e variáveis de Ambiente

#### .env

Deve-se criar um arquivo `.env` contendo o valor da variavel de ambiente `GIPHY_API_KEY`. Exemplo:
`GIPHY_API_KEY=<MY_API_KEY>`.

#### .dockerignore

Caso não exista, deve-se criar o arquivo `.dockerignore` contendo a pasta `node_modules` em seu registro.

### Criando a imagem Docker

Executar na raiz do projeto o comando: `docker build -t samoutinho:nodeDelivery .` para criar a imagem Docker conforme arquivo `Dockerfile`.

Após a execução, execute o comando: `docker run -p 3000:3000 -d samoutinho:nodeDelivery` para criar o container. Rodando o comando será exibido o ID do container e executando no terminal `docker ps` será listado o processo em execução no Docker. 

Acessando no navegador `http://localhost:3000` para rodar a aplicação.