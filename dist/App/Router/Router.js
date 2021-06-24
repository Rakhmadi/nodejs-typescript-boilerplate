"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExampleController_1 = __importDefault(require("../Controller/ExampleController"));
const Router = express_1.default.Router();
Router.get('/', ExampleController_1.default.Index);
Router.get('/post', ExampleController_1.default.Index);
exports.default = Router;
//# sourceMappingURL=Router.js.map