const express = require('express');
const app = express();
const path = require('path');

// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));

app.set('puerto',process.env.PORT || 3000)

app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));


/*app.listen(3001, () => {
  console.log("Servidor Corriendo en puerto 3001")
})*/

app.get('/',(req,res) => { 
  res.sendFile(path.join(__dirname,"/views/home.html"))
})  

app.get('/formulario',(req,res) => { 
  res.sendFile(path.join(__dirname,"/views/formulario.html"))
})  

app.get('/login',(req,res) => { 
  res.sendFile(path.join(__dirname,"/views/login.html"))
}) 



