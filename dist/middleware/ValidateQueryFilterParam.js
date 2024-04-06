"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryFilterParam = void 0;
function validateQueryFilterParam(req, res, next) {
    const filters = req.query.filters;
    if (!filters || filters.trim() === '') {
        return res.status(400).send('Filters query parameter is required');
    }
    next();
}
exports.validateQueryFilterParam = validateQueryFilterParam;
