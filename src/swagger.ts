import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import dotenv from 'dotenv';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const routerPath = path.resolve(__dirname, './routes/**/*.js');

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
                url: `http://${host}:${port}/api`, 
            },
        ],
    },
    apis: [routerPath],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;