import express from 'express'
import path from 'path'

const host = '127.0.0.1'
const port = 3000

var app = express()
app.use(express.static('static'))
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`)
})
app.get('/user/:id/:username/', (req, res) => {
    res.send(`User ID: ${req.params.id} \n Username: ${req.params.username}`)
})

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve('static/template/index.html'))
})

app.get('/dl-olustur', (req, res) => {
    res.status(200).sendFile(path.resolve('static/template/dl-olustur.html'))
});

app.get('/dl-listele', (req, res) => {
    res.status(200).sendFile(path.resolve('static/template/dl-listele.html'))
});

app.use((req, res,next) => {
    res.status(404).sendFile(path.resolve('static/template/404.html'))
});