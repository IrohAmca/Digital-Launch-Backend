import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';

import dotenv from 'dotenv';
import path from 'path';

import routes  from './routes';
import swaggerSpec  from './swagger';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port as number, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
