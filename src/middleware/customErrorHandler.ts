import { NextFunction, Request, Response } from "express";

export const customErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
    statusText: 'error',
    message: 'server error',
    payload: null
    })
}