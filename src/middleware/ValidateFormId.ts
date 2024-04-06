
import { Request, Response, NextFunction } from "express";

export function validateFormId(req: Request, res: Response, next: NextFunction) {
    const formId = req.params.formId;
  
    if (!formId ) {
      return res.status(400).send('Invalid form ID');
    }
  
    next();
}