import express from 'express'



const app = express()
app.use(express.json()) 



app.get('/hello', (req, res) => {
    // do something ..
    res.send('Hello World 🌎')
})

const students =[
    {firstName: 'Jonathan', LastName: 'Vegas'},
    {firstName: 'Carlie', LastName: 'Duperval'},
    {firstName: 'Nerissa', LastName: 'Dorlus'},
    {firstName: 'Harlie', LastName: 'Duperval'},
    {firstName: 'Jayden', LastName: 'Duperval'},
]
app.post('/students', (req, res) => {
    const newStudent = req.body
    students.push(newStudent)
    res.status(201).send(students)
})
// Student Jonathan
app.get('/students/:fName', (req , res) => {
    const student = students.find(stud => stud.firstName === req.params.fName)
    if(!student){
        res.status(404).send({ message:'Name not found', success :false})
        return
    }
    res.send(student)

})






const Port = 3001
app.listen(3001, () => {
    console.log(`We are listing 0n port :`,Port)
})