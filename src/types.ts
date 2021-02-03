import { Response, Request } from "express";

export type MyContext = {
    req: Request;
    res: Response;
};
