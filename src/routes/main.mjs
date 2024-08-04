import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/user/:id/:username/', (req, res) => {
    res.send(`User ID: ${req.params.id} \n Username: ${req.params.username}`)
})

router.get('/', (req, res) => {
    res.render('site/admin')
})

router.get('/dl-olustur', (req, res) => {
    res.render('site/dl-olustur')
});

router.get('/dl-listele', (req, res) => {
    res.render('site/dl-listele')
});

router.post('/submit-lansman', urlencodedParser,(req, res) => {
    console.log(req.body)
    res.redirect('/')
});

export default router;