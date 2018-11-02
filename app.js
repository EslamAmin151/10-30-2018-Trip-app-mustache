const express = require('express')
const mustacheExpress = require('mustache-express')
const  bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))


let vacations =[{city:Denver, image:download.jpeg, dateDepature: january 1 2018,returnDate: jan 5 2018}]

app.engine('mustache',mustacheExpress())
app.set ('views','./views')
app.set('view engine','mustache')

app.listen(port,function(){
console.log("server is running")
})

app.get('/',function(req,res){
  res.render('index', {vacationContent:vacations})
})


app.post('/add-vacation',function(req,res){

  let city = req.body.city
  let image = req.body.image
  let dateDeparture = req.body.dateDeparture
  let dateReturn = req.body.dateReturn

  let vacationTrip =[{city:city, image:image, dateDepature: dateDepature,returnDate: returnDate}]
   vacations.push(vacationTrip)
  res.render('index',{vacationContent:vacations})
})

app.get('/add-vacation', function(req,res){
  res.render('add-vacation')
})
