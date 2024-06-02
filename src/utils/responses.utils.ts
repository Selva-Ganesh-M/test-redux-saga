import { Request, Response } from "express";

const successResponse = (req: Request, res: Response, data: {status: number, message: string, payload:any}) => {
    res.status(data.status).json({
    statusText: 'success',
    message: data.message,
    payload: data.payload
    })
}

const rejectResponse = (req: Request, res: Response, data: {status: number, message: string})=>{
    res.status(data.status).json({
    statusText: 'failure',
    message: data.message,
    payload: null
    })
}

const responses =  {
    successResponse, rejectResponse
}

export default responses;