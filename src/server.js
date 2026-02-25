//const express = require('express')
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Olá Mundo Express API!")
})

app.get('/user', (req, res) => {
  res.send("Exemplo de GET na rota /user")
})

app.post('/user', (req, res) => {
  res.send("Exemplo de POST na rota /user")
})

app.put('/user', (req, res) => {
  res.send("Exemplo de PUT na rota /user")
})

app.patch('/user', (req, res) => {
  res.send("Exemplo de PATCH na rota /user")
})

app.delete('/user', (req, res) => {
  res.send("Exemplo de DELETE na rota /user")
})

app.listen(port, () => {
  console.log(`Servidor rondando em http://localhost:${port}`)
})
