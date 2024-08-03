import express from 'express'
import path from 'path'
import { engine } from 'express-handlebars';

const host = '127.0.0.1'
const port = 3000

var app = express()

app.use(express.static('static'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})
app.get('/user/:id/:username/', (req, res) => {
    res.send(`User ID: ${req.params.id} \n Username: ${req.params.username}`)
})

app.get('/', (req, res) => {
    res.render('site/admin')
})

app.get('/dl-olustur', (req, res) => {
    res.render('site/dl-olustur')
});

app.get('/dl-listele', (req, res) => {
    res.render('site/dl-listele')
});

app.use((req, res) => {
    res.render('site/404')
});