const express = require('express')
const app = express()

let id;
let name
let lastName
let age

app.use(express.json());

app.post('/', function(request, response){
    id=request.body.id
  console.log(request.body.id);      // your JSON
   response.send(request.body);    // echo the result back


});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)