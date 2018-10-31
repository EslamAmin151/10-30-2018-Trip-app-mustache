const app = require('expres')
const app = express()
const mustacheExpress = require('mustache-express')
const  bodyParser = require('body-parser')
const port = 3000

app.engine('mustache',mustacheExpress())
app.use(bodyParser.urlencoded({ extended: false }))
app.set ('views','./views')
app.set('view engine','mustache')

app.listen(port,function(){
console.log("server is running")
})

app.post('/add-vacation',function(req,res){

  let city = req.body.city
  let image = req.body.image
  let dateDeparture = req.body.dateDeparture
  let dateReturn = req.body.dateReturn
  let tripId = require.body.tripID
  let vacations =[]
  let vacationTrip = new Trip(city, image, departureDate, returnDate)
       vacations.push(vacationTrip)
  res.redirect('/vacation')
})
app.get('/add-vacation', function(req,res){
  res.render('add-vacation')
})

app.get('/vacation', function(req,res){

  res.render('vacation', { vacationContent : vactionTrip})
})
