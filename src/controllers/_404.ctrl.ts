import path from "path"
import { NextFunction, Request, Response } from "express";

const _404_ctrl = (req: Request, res: Response, next: NextFunction) =>{
    console.log('triggered')
    return res.status(404).sendFile(path.join(__dirname, "..", "..", "public", 'pages/_404.html'))
}

export default _404_ctrl