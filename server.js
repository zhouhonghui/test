const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './weights')))

app.get('/', (req, res) => res.redirect('/index'))
app.get('/index', (req, res) => res.sendFile(path.join(__dirname, './index.html')))

app.listen(3003, () => console.log('Listening on port 3003!'))