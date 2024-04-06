"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ValidateFormId_1 = require("./middleware/ValidateFormId");
const ValidateQueryFilterParam_1 = require("./middleware/ValidateQueryFilterParam");
const filterResponse_1 = require("./utils/filterResponse");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const axios = require('axios');
const app = (0, express_1.default)();
const accessToken = process.env.ACCESS_TOKEN || 'sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912';
const host = process.env.FILLOUT_API_HOST || 'https://api.fillout.com';
const port = process.env.PORT || 3000;
/**
 * The one and only end point for this application.
 */
app.get('/:formId/filteredResponses', [ValidateFormId_1.validateFormId, ValidateQueryFilterParam_1.validateQueryFilterParam], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, afterDate, beforeDate, offset, status, includeEditLink, sort, filters } = req.query;
    const formId = req.params.formId;
    const queryMap = new Map();
    // Build query params ---> start
    if (limit)
        queryMap.set('limit', limit);
    if (afterDate)
        queryMap.set('afterDate', afterDate);
    if (beforeDate)
        queryMap.set('beforeDate', beforeDate);
    if (offset)
        queryMap.set('offset', offset);
    if (includeEditLink)
        queryMap.set('includeEditLink', includeEditLink);
    if (sort)
        queryMap.set('sort', sort);
    if (status)
        queryMap.set('status', status);
    const queryParams = Array.from(queryMap.entries())
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    // Build query params ----> end
    try {
        // Consume fillout api
        const response = yield axios.get(`${host}/v1/api/forms/${formId}/submissions${queryParams}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const filtersObj = JSON.parse(filters);
        const responseData = response.data;
        let result = responseData.responses;
        // Filter results if filter array exist
        if (filtersObj.length > 0) {
            result = [];
            result = (0, filterResponse_1.filterResponse)(responseData.responses, filtersObj);
        }
        // responseData.responses = result;
        // responseData.totalResponses = result.length;
        res.json(responseData);
    }
    catch (error) {
        console.error('Error processing data from external API:', error);
        res.status(500).json({ error: 'Failed to process data from external API' });
    }
}));
// /**
//  * @description Filters questions base on filter object from filters query param
//  * @param responses Questions from fillout api
//  * @param filters Filters object
//  * @returns Returns filtered questions
//  */
// function filterResponse(responses: IResponse[], filters: FilterClauseType[]) {
//     const results = responses.filter((response) => {
//         // Convert questions to keyvalue pair for efficient searching
//         const questions: Question[] = response.questions.map((q) => {
//             const keyValue = new Map();
//             const obj = { ...q };
//             keyValue.set(q.id, obj);
//             return Object.fromEntries(keyValue);
//         });
//         const convertedQuestions = convertToObject(questions);
//         // Loop through filters and discard unwanted questions
//         for(let counter = 0; counter < filters.length; counter++) {
//             const id = filters[counter].id;
//             if(!convertedQuestions[id]) {
//                 return false;
//             }
//             switch(filters[counter].condition) {
//                 case "equals":
//                     if (!(convertedQuestions[id].value === filters[counter].value)) return false;
//                     break;
//                 case "does_not_equal":
//                     if (!(convertedQuestions[id].value !== filters[counter].value)) return false;
//                     break;
//                 case "greater_than":
//                     if (!(filters[counter].value > convertedQuestions[id].value)) return false;
//                     break;
//                 case "less_than":
//                     if (!(filters[counter].value < convertedQuestions[id].value)) return false;
//             }
//             return true;
//         }
//     })
//     return results;
// }
// /**
//  * @description Utility to convert map to object
//  * @param questionsArr Question results
//  * @returns 
//  */
// function convertToObject(questionsArr: Question[]): Question {
//     const questionsObject = questionsArr.reduce((result, currentObject) => {
//         const key = Object.keys(currentObject)[0];
//         const value = currentObject[key];
//         result[key] = value;
//         return result;
//       }, {});
//     return questionsObject;
// }
app.listen(port, () => console.log(`listening on port ${port}`));
