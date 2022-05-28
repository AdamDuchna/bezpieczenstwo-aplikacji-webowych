const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

const primaryUser = {
    login: 'admin',
    password: 'tajne'
};

var records = [];

app.use((req,res,next) =>{
    const base64auth = [req.headers.authorization || ''].toString().split(' ')[1] || '';
    const [login,password] = Buffer.from(base64auth, 'base64').toString().split(':')

    if( login && password && login === primaryUser.login && password === primaryUser.password){
        return next()
    }

    res.set('WWW-authenticate','Basic realm="my realm"');
    res.status(401).send('Error 401 Unauthorized');

})

app.get('/', (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send(records)
})

app.post('/', (req,res)=>{
    const {name, surname} = req.body
    records.push(`${name} ${surname}`)
    res.header("Access-Control-Allow-Origin", "*");
    res.send(`${name} ${surname}`)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})