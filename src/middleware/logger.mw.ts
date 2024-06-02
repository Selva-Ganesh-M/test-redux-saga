import { NextFunction, Request, Response } from "express"

export const reqLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`\n`)
    console.log(`---------------------------------------------------`)
    console.log(`\n`)
    
    console.log(`${req.method} ${req.path}`)

    console.log(`\n`)
    console.log(`---------------------------------------------------`)
    console.log(`\n`)

    next()
}