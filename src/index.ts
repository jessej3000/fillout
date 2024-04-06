import express from "express";
import { Request, Response } from "express";
import { validateFormId } from "./middleware/ValidateFormId";
import { validateQueryFilterParam } from "./middleware/ValidateQueryFilterParam";
import { filterResponse } from "./utils/filterResponse";
import dotenv from 'dotenv';

dotenv.config();

const axios = require('axios');
const app = express();
const accessToken = process.env.ACCESS_TOKEN || 'sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912';
const host = process.env.FILLOUT_API_HOST || 'https://api.fillout.com';
const port = process.env.PORT || 3000;
/**
 * The one and only end point for this application.
 */
app.get(
    '/:formId/filteredResponses',
    [validateFormId, validateQueryFilterParam],
    async (req: Request, res: Response) => {
    const {
        limit,
        afterDate,
        beforeDate,
        offset,
        status,
        includeEditLink,
        sort,
        filters } = req.query;
    const formId = req.params.formId;
    
    const queryMap = new Map();
    
    // Build query params ---> start
    if (limit) queryMap.set('limit', limit);
    if (afterDate) queryMap.set('afterDate', afterDate);
    if (beforeDate) queryMap.set('beforeDate', beforeDate);
    if (offset) queryMap.set('offset', offset);
    if (includeEditLink) queryMap.set('includeEditLink', includeEditLink);
    if (sort) queryMap.set('sort', sort);
    if (status) queryMap.set('status', status);
    
    const queryParams = Array.from(queryMap.entries())
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    // Build query params ----> end

    try {
        // Consume fillout api
        const response = await axios.get(
            `${host}/v1/api/forms/${formId}/submissions${queryParams}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );
        const filtersObj = JSON.parse(filters as string);
        
        const responseData = response.data;
        
        let result = responseData.responses;
        
        // Filter results if filter array exist
        if(filtersObj.length > 0) {
            result = [];
            result = filterResponse(responseData.responses, filtersObj);
        }

        // responseData.responses = result;
        // responseData.totalResponses = result.length;
        res.json(responseData);
      } catch (error) {
        console.error('Error processing data from external API:', error);
        res.status(500).json({ error: 'Failed to process data from external API' });
      }
});

app.listen(port, () => console.log(`listening on port ${port}`));