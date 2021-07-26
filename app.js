const express = require ('express');
const app = express ();
const path = require ('path')
const port = 3030

app.listen (port, () => console.log (`Servidor funcionando en el puerto http://localhost:${port}`))
app.use (express.static('public'));

app.get ('/', (req, res) => res.sendFile (path.join (__dirname, 'views', 'home.html')));
