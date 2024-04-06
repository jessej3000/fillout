import { Question } from "../types/QuestionsKeyValue";
/**
 * @description Utility to convert map to object
 * @param questionsArr Question results
 * @returns 
 */
export function convertToObject(questionsArr: Question[]): Question {
    const questionsObject = questionsArr.reduce((result, currentObject) => {
        const key = Object.keys(currentObject)[0];
        const value = currentObject[key];
        result[key] = value;
        return result;
      }, {});
      
    return questionsObject;
}