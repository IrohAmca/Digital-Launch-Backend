import express from 'express';
import insertRouters from './routes/insertData';
import getRouters from './routes/getData';
import deleteRouters from './routes/deleteData';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import s3Routers from './routes/s3Routes';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const host = process.env.HOST || '';
const port = process.env.PORT || 5000;

const app = express();

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
                url: 'http://127.0.0.1:3000',
            },
        ],
    },
    apis: [routerPath],
};

const swaggerSpec = swaggerJSDoc(options);


app.use(cors());
app.use(fileUpload());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', insertRouters);
app.use('/api', getRouters);
app.use('/api', deleteRouters);
app.use('/api', s3Routers);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port as number, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
