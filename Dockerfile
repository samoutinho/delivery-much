## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:12.18.3

## Define o local onde o app vai ficar no disco do container
WORKDIR /usr/app

## Copia package-lock.json e package.jon para dentro da pasta /usr/app
COPY package*.json ./

## Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/app do container
## A pasta node_modules será ignorada no arquivo .dockerignore

COPY . .

## Container ficará ouvindo os acessos na porta 3000
EXPOSE 3000

## Executa o comando npm start para iniciar o script que que está no package.json
CMD npm start