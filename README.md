# Projeto My Ticket

Tabela de conteúdos
=================
<!--ts-->
   * [Status do Projeto](#Status do Projeto)
   * [Descrição do Projeto](#Descrição do Projeto)
   * [Tecnologias](#Tecnologias)
   * [Iniciando o projeto (Backend)](#Iniciando o projeto (Backend))
   * [Dockerizing para desenvolvimento](#Dockerizing para desenvolvimento)
   * [Realizando building da imagem do projeto](#Realizando building da imagem do projeto)
   * [Utilizando Dockerhub para trabalhar com imagens](#Utilizando Dockerhub para trabalhar com imagens) 
   * [Teste da API com o Insomnia sem o Docker](# da API com o Insomnia sem o Docker)
<!--te-->

## Status do Projeto
🚧  Projeto MyTicket 🚀 Em construção...  🚧

## Descrição do Projeto
O presente sistema tem como objetivo em ser um app de compras de ingressos para enventos. Para tanto,
utilizo JavaScript e o runtime Node.

## Tecnologias
![Badge](https://img.shields.io/badge/Projeto-JavaScript-yellow)
![Badge](https://img.shields.io/badge/Node-v16.14.2-yellow)
![Badge](https://img.shields.io/badge/Npm-v8.7.0-yellow)
![Badge](https://img.shields.io/badge/-Docker-%230000A0)
![Badge](https://img.shields.io/badge/-Dockerhub-%230000A0)

# Iniciando o projeto (Backend)

Vá para a pasta de backend
``` shell
cd backend
```

instale o npm package com o comando
``` shell
npm install
```

e inicie o server com o comando 
``` shell
npm start
```

Por último, acesse http://localhost:8080 para verificar se o app está funcionando.

## Dockerizing para desenvolvimento

Primeiro, tenha certeza que você tenha docker ou docker-compose instalado em sua máquina com o comando
``` shell
docker -v
```

Caso não tenha, siga as instruções de https://docs.docker.com/engine/install/ubuntu/

## Realizando building da imagem do projeto

No diretório onde está presente o Dockerfile - neste caso na pasta backend -, rode o comando: 

``` shell
docker build -t evandroooff/nodejs-image-myticket
```

e execute 


``` shell
docker run --name nodejs-image-myticket -p 80:8080 -d evandroooff/nodejs-image-myticket
```

Por fim, em seu navegador, entre em http://localhost:80 para verificar se a aplicação está em execução.

### Utilizando Dockerhub para trabalhar com imagens

Ao invés de realizar o building da imagem no passo anterior, você pode realizar as seguintes etapas:

Primeiro realize o login do docker em seu terminal 

``` shell
docker login -u seu_usuário_dockerhub -p sua_senha_dockerhub
```

Depois baixe a imagem da aplicação do Dockerhub 

``` shell
docker pull evandroooff/nodejs-image-myticket
```

Por fim, execute o container com o comando 

``` shell
docker run --name nodejs-image-myticket -p 80:8080 -d evandroooff/nodejs-image-myticket
```

Em seu navegador, entre em http://localhost:80 para verificar se a aplicação está em execução.

## Teste da API com o Insomnia sem o Docker

**Observação** Para você executar os testes com o Insomnia, lembre-se de rodar o servidor com o comando ``` shell npm start ``` na pasta backend, conforme visto nos passos anteriores

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=My%20Ticket&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEflorscuk%2FMyTicket%2Fmaster%2Ftest%2FInsomnia_2022-06-06.json)


