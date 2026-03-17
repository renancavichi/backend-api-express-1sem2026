//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import publicationRouter from './routers/publicationRouter.js'

const app = express()
const port = 3000

app.use(express.json())
// req.body

app.get('/', (req, res) => {
  res.send("Olá Mundo Express API!")
})

app.use('/user', userRouter)
app.use('/publication', publicationRouter)

app.listen(port, () => {
  console.log(`Servidor rondando em http://localhost:${port}`)
})
