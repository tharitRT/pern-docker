"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.json({ status: 'The sedulous hyena ate the antelope!' });
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map