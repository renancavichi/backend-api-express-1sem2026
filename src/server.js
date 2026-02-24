//const express = require('express')
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Olá Mundo Express API!")
})

app.get('/user', (req, res) => {
  res.send("Aqui está a lista de usuários!")
})

app.listen(port, () => {
  console.log(`Servidor rondando em http://localhost:${port}`)
})
