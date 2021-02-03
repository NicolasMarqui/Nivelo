import { Response, Request } from "express";
import { Session, SessionData } from "express-session";

export type MyContext = {
    req: Request & {
        session: Session & Partial<SessionData> & { user?: String };
    };
    res: Response;
};
