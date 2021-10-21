const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());

const port = 5000


app.get('/', (req, res) => {
    res.send('Wow,Hello My Second Ever Node very excited')
});

const users = [
    { id: 0, name: 'Savana', email: 'Savana@gmail.com', phone: 32546 },
    { id: 1, name: 'Sabnur', email: 'Sabnur@gmail.com', phone: 32546 },
    { id: 2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: 32546 },
    { id: 3, name: 'Suchurita', email: 'Suchurita@gmail.com', phone: 32546 }
]

app.get('/users', (req, res) => {
    // console.log(req.query.search)
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
})