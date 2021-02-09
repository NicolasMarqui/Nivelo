import { Router, Request, Response } from "express";
import Schedule from "../models/Schedule";

const scheduleRouter = Router();

// Retrieve schedule for single tutor
scheduleRouter.get("/api/schedule/:id", async (req: Request, res: Response) => {
    const tutorID = req.params.id;
    const allSchedule = await Schedule.find({ tutorID });

    res.status(200).send({ data: allSchedule });
});

// Make day available

// Delete time inside day

// Delete all times inside day

// Update time inside day

// Add new day

// Add new time to day

export default scheduleRouter;
