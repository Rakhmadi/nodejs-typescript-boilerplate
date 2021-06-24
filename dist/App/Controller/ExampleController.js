"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleController {
    static Index(req, res) {
        res.status(200);
        return res.json({
            "username": "Jhon Doue",
            "email": "jdoe@gmail.com"
        });
    }
}
exports.default = ExampleController;
//# sourceMappingURL=ExampleController.js.map