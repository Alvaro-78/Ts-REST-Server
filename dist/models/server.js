"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("../routes/userRouter"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
    }
    routes() {
        this.app.use(this.apiPaths.users, userRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor levantado en el puerto ' + '', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map