import { Request, Response } from "express";

export default class ExampleController{
    static Index(req:Request,res:Response):object{
        res.status(200)
        return res.json({
            "username":"Jhon Doue",
            "email":"jdoe@gmail.com"
        })
    }
}