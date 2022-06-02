const http = require("http")
const express = require("express")

http.createServer(express).listen(3000, () => console.log("Servidor rodando na porta 3000"))
