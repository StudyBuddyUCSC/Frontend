const express = require('express')
const data = require('./locations.json')
const app = express()
const port = 8000

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database')

db.serialize(() => {
    db.exec("DROP TABLE IF EXISTS Locations; CREATE TABLE IF NOT EXISTS Locations (name TEXT, long FLOAT, lat FLOAT)", 
    (err) => {console.log(err)})
    for (loc of data) {
        db.run("INSERT INTO Locations VALUES (?, ?, ?)", [loc.name, loc.long, loc.lat])
    }
})

app.get('/locations', (req, res) => {
    db.all("SELECT * FROM Locations", (err, rows) => res.send(rows))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})