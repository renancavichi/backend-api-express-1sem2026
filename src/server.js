//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import postRouter from './routers/postRouter.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Olá Mundo Express API!")
})

app.use('/user', userRouter)
app.use('/post', postRouter)

app.listen(port, () => {
  console.log(`Servidor rondando em http://localhost:${port}`)
})
