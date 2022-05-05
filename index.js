const express = require('express')
const app = express()
let id;
let name; 
let lastname;
let old;

app.use(express.json());

app.post('/'), function(recuest, response){
  id = request.body.id 
  name = request.body.name
  lastname = request.body.lastname
  old = request.body.old
  console.log(request.body);   //your JSON
  response.sed("Exitoso"); //echo the result bact

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/name', function (req, res) {
  res.send(name)
  console.log(name);
})

app.get('/lastname', function (req, res) {
  res.send(lastname)
  console.log(lastname);
})

app.get('/age', function (req, res) {
  res.send(old);
  console.log(old);
})

}
app.listen(3000)