import express from 'express';
import insertRouters from './routes/insertData';
import bodyParser from 'body-parser';
import getRouters from './routes/getData';
import cors from 'cors';

const host = '0.0.0.0';
const port = 3000;

const app = express();

app.use(cors());
app.use('/', insertRouters);
app.use('/', getRouters);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
