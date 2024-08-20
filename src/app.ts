import express from 'express';
import { engine } from 'express-handlebars';
import insertRouters from './routes/insertData';
import getRoters from './routes/getData';
import bodyParser from 'body-parser';
import cors from 'cors';

const host = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static('./dist/static'));
app.use(cors());
app.use('/', insertRouters);
app.use('/', getRoters);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res) => {
    res.render('site/404');
});

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));

app.set('view engine', 'handlebars');
app.set('views', './dist/views');

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
