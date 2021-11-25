const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const pointRoutes = require('./routes/Points')
const gruzRoutes = require('./routes/Gruzy')
const rRoutes = require('./routes/1')
const zRoutes = require('./routes/2')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
let g = 666
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(pointRoutes)
app.use(rRoutes)
app.use(zRoutes)
app.use(gruzRoutes)

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://a:1@1.jl6sq.mongodb.net/1',
      {
        useNewUrlParser: true,
        //useFindAndModify: false
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}



start()
