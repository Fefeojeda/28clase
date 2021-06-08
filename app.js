const express = require('express')
const path = require('path');
const app = express();
const port = 3000;
const views = path.join(__dirname,'views')
app.use(express.static('public'))

app.get('/',(req,res) => res.sendFile(path.join(views, 'home.html')));
app.get('/about',(req,res) => res.sendFile(path.join(views, 'about.html')));
app.get('/music',(req,res) => res.sendFile(path.join(views, 'music.html')));
app.get('/contact',(req,res) => res.sendFile(path.join(views, 'contact.html')));


app.listen(port, () => console.log('Server ON: Port ' + port))