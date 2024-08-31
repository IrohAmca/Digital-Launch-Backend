"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const insertData_1 = __importDefault(require("./routes/insertData"));
const getLaunch_1 = __importDefault(require("./routes/getLaunch"));
const deleteData_1 = __importDefault(require("./routes/deleteData"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const s3Routes_1 = __importDefault(require("./routes/s3Routes"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const insertComponent_1 = __importDefault(require("./routes/insertComponent"));
const updateComponent_1 = __importDefault(require("./routes/updateComponent"));
const envPath = path_1.default.resolve(__dirname, '../.env');
dotenv_1.default.config({ path: envPath });
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
const routerPath = path_1.default.resolve(__dirname, 'routes/*.js');
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use('/api', insertData_1.default);
app.use('/api', getLaunch_1.default);
app.use('/api', deleteData_1.default);
app.use('/api', insertComponent_1.default);
app.use('/api', updateComponent_1.default);
app.use('/api', s3Routes_1.default);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
