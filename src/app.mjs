import express from 'express'

import { engine } from 'express-handlebars';
import main from './routes/main.mjs'
import bodyParser from 'body-parser';

const host = '127.0.0.1'
const port = 3000

var app = express()

app.use(express.static('static'))
app.use('/', main)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res) => {
    res.render('site/404')
});

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})
