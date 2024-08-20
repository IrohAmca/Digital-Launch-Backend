import express from 'express';
import insertRouters from './routes/insertData';
import getRouters from './routes/getData';
import deleteRouters from './routes/deleteData';
import bodyParser from 'body-parser';
import cors from 'cors';

const host = '127.0.0.1';
const port = 3000;

const app = express();

app.use(cors());
app.use('/', insertRouters);
app.use('/', getRouters);
app.use('/', deleteRouters);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
