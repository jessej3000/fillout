"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFormId = void 0;
function validateFormId(req, res, next) {
    const formId = req.params.formId;
    if (!formId) {
        return res.status(400).send('Invalid form ID');
    }
    next();
}
exports.validateFormId = validateFormId;
