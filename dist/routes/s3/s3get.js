"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const s3Get_1 = require("../../services/s3/s3Get");
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.get('/s3-listAll', async (req, res) => {
    const result = await (0, s3Get_1.listObjects)();
    res.send(result);
});
router.get('/s3-getVideo', async (req, res) => {
    const data = await (0, s3Get_1.getObject)(req.body.key);
    if (data) {
        fs_1.default.writeFileSync("s3/" + req.body.key, data);
        res.send('Mission completed');
    }
});
router.get('/s3-getImage', async (req, res) => {
    const data = await (0, s3Get_1.getObject)(req.body.key);
    if (data) {
        fs_1.default.writeFileSync("s3/" + req.body.key, data);
        res.send('Mission completed');
    }
});
exports.default = router;
