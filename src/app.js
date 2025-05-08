// const express = require('express');
//exmascript modules
import express from 'express'
import peliculasRoutes from './routes/peliculas.routes.js'
// 

const app = express()

app.use(express.json())
app.use('/api/',peliculasRoutes)


app.use((req,res,next) => {
  res.status(404).json({
    message:'No existe el endpoint'
  })
})


export default app