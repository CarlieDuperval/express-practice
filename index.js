import express, { response } from 'express'



const app = express()
app.use(express.json()) 



app.get('/hello', (req, res) => {
    // do something ..
    res.send('Hello World 🌎')
})

app.get('/students', (req, res) => {
    const students =[
        {firstName: 'Jonathan', LastName: 'Vegas'},
        {firstName: 'Carlie', LastName: 'Duperval'},

    ]
    res.send(students)
})

const Port = 3001
app.listen(3001, () => {
    console.log(`We are listing 0n port :`,Port)
})