import { Response, Request } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";

export type MyContext = {
    req: Request & {
        session: Session &
            Partial<SessionData> & {
                user?: String;
                tutor?: Number | null;
                test?: String;
            };
    };
    res: Response;
    redis: Redis;
};
