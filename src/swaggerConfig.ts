import swaggerJSDoc from 'swagger-jsdoc';

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
    apis: ['.src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
