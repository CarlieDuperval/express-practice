import express from 'express'
import { app } from 'firebase-functions/v1'




app.get('/hello', (request, response) => {
    // do something ..
    response.send('Hello World 🌎')
})