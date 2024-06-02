import path from "path"
import { NextFunction, Request, Response } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
    console.log(`this is called`)
    // return res.status(200).sendFile(
        
    // )
    res.status(200).sendFile(path.join(__dirname, "..", "..", "public", "/pages/welcome.html"))
}