import express from 'express';
import insertRouters from './routes/insertData';
import getRouters from './routes/getLaunch';
import deleteRouters from './routes/deleteData';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import s3get from './routes/s3/s3get';
import s3delete from './routes/s3/s3delete';
import s3post from './routes/s3/s3post';
import galleryGet from './routes/gallery/galleryGet';
import dotenv from 'dotenv';
import path from 'path';
import insertComponent from './routes/insertComponent';
import updateComponent from './routes/updateComponent';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

const routerPath = path.resolve(__dirname, 'routes/*.js');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Digital Lansman API',
            version: '1.0.0',
            description: 'A simple API for Digital Lansman',
        },
        servers: [
            {
                url: 'http://0.0.0.0:5000',
            },
        ],
    },
    apis: [routerPath],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', insertRouters);
app.use('/api', getRouters);
app.use('/api', deleteRouters);
app.use('/api', insertComponent);
app.use('/api',updateComponent);
app.use('/api', s3get);
app.use('/api', s3delete);
app.use('/api', s3post);
app.use('/api', galleryGet);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port as number, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
