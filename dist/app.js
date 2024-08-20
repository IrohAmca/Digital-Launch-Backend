"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const insertData_1 = __importDefault(require("./routes/insertData"));
const getData_1 = __importDefault(require("./routes/getData"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const host = '127.0.0.1';
const port = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/', insertData_1.default);
app.use('/', getData_1.default);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((req, res) => {
    res.render('site/404');
});
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
