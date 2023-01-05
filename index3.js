var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())


let array_data = []

app.post('/', function(request, response, next){
  console.log(request.body)
  array_data.push(request.body)
  response.send('ok')
  console.log(array_data)
})

app.get('/data', function(req, res, next){
  res.send(array_data.pop())
  console.log(array_data)
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})