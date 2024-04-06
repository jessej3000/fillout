import { IResponse } from "../interfaces/IResponse";
import { FilterClauseType } from "../types/FilterClauseType";
import { Question } from "../types/QuestionsKeyValue";
import { convertToObject } from "./convertToObject";
/**
* @description Filters questions base on filter object from filters query param
* @param responses Questions from fillout api
* @param filters Filters object
* @returns Returns filtered questions
*/
export function filterResponse(responses: IResponse[], filters: FilterClauseType[]) {
   const results = responses.filter((response) => {
       // Convert questions to keyvalue pair for efficient searching
       const questions: Question[] = response.questions.map((q) => {
           const keyValue = new Map();
           const obj = { ...q };
           keyValue.set(q.id, obj);
           return Object.fromEntries(keyValue);
       });
       const convertedQuestions = convertToObject(questions);
       
       // Loop through filters and discard unwanted questions
       for(let counter = 0; counter < filters.length; counter++) {
           const id = filters[counter].id;
           if(!convertedQuestions[id]) {
               return false;
           }
           
           switch(filters[counter].condition) {
               case "equals":
                   if (!(convertedQuestions[id].value === filters[counter].value)) return false;
                   break;
               case "does_not_equal":
                   if (!(convertedQuestions[id].value !== filters[counter].value)) return false;
                   break;
               case "greater_than":
                   if (!(filters[counter].value > convertedQuestions[id].value)) return false;
                   break;
               case "less_than":
                   if (!(filters[counter].value < convertedQuestions[id].value)) return false;
           }
       }
       return true;
   })

   return results;
}