const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());

const users = [
    {id: 1, name:'Sabana', email:'sabana@gmail.com'},
    {id: 2, name:'Rahim', email:'rahim@gmail.com'},
    {id: 3, name:'Kalam', email:'kalam@gmail.com'},
]

app.get('/', (req, res)=> {
    res.send('Users Management server is running')
});

app.get('/users', (req, res)=> {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body);
});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})
