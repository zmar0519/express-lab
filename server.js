// import modules
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as studentsDB from "./data/students-db.js"


// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)


// Mount Middleware (app.use)



// Mount routes
app.get('/', function(req, res) {
    res.send('<h1>hello, friend</h1>')
})

app.get("/home", function (req, res) {
    res.render('home')
  })
  
  app.get('/students', function(req, res) {
    studentsDB.find({}, function (error, students) {
      res.render("students/index", {
        students: students,
        error: error
      })
    })
  })


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})