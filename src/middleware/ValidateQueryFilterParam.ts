
import { Request, Response, NextFunction } from "express";

export function validateQueryFilterParam(req: Request, res: Response, next: NextFunction) {
    const filters: string | undefined = req.query.filters as string;

    if (!filters || filters.trim() === '') {
      return res.status(400).send('Filters query parameter is required');
    }
  
    next();
}