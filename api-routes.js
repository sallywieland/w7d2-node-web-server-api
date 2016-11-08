// Libraries
var express = require('express')
var router = express.Router()

// SQLite3 Library (https://github.com/mapbox/node-sqlite3/wiki/API)
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./store.sqlite3')

// Routes
// users
router.get('/users', function (req, res) {
  db.serialize(function () {
      db.all('SELECT * FROM users', (error, rows) => {
        if (req.query.format === 'html') {
          res.render('users.html', {
            users: rows
          })
        }
        else {
          res.json(rows)
        }
    })
  })
})
// addresses
router.get('/addresses', function (req, res) {
  db.serialize(function () {
      db.all('SELECT * FROM addresses', (error, rows) => {
        if (req.query.format === 'html') {
          res.render('addresses.html', {
            addresses: rows
          })
        }
        else {
          res.json(rows)
        }
    })
  })
})
// orders
router.get('/orders', function (req, res) {
  db.serialize(function () {
      db.all('SELECT * FROM orders', (error, rows) => {
        if (req.query.format === 'html') {
          res.render('orders.html', {
            orders: rows
          })
        }
        else {
          res.json(rows)
        }
    })
  })
})
// items
router.get('/items', function (req, res) {
  db.serialize(function () {
      db.all('SELECT * FROM items', (error, rows) => {
        if (req.query.format === 'html') {
          res.render('items.html', {
            items: rows
          })
        }
        else {
          res.json(rows)
        }
    })
  })
})

module.exports = router
