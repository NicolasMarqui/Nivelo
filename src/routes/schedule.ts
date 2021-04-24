import { Router, Request, Response } from "express";
import Schedule from "../models/Schedule";

const scheduleRouter = Router();

// Retrieve schedule for single tutor
scheduleRouter.get("/api/schedule/:id", async (req: Request, res: Response) => {
    const tutorID = req.params.id;
    const allSchedule = await Schedule.findOne({ tutorID });

    res.status(200).send({ data: allSchedule });
});

// Retrieve schedule for single tutor by month
scheduleRouter.get(
    "/api/schedule/single/:id",
    async (req: Request, res: Response) => {
        const tutorID = req.params.id;
        const month = req.query.month?.toString();

        const allSchedule = await Schedule.findOne({
            tutorID,
            dates: { $elemMatch: { month } },
        });

        return res.status(200).send({ data: allSchedule });
    }
);

// Retrieve all times for single tutor by day
scheduleRouter.get(
    "/api/schedule/single/:id",
    async (req: Request, res: Response) => {
        const tutorID = req.params.id;
        const date = req.query.date;

        const allSchedule = await Schedule.findOne({
            "dates.month": "03",
        });

        return res.status(200).send({ data: allSchedule });
    }
);

// Make day available
scheduleRouter.post(
    "/api/schedule/available/:id",
    async (req: Request, res: Response) => {
        const tutorID = req.params.id;
        const allSchedule = await Schedule.findOne({ tutorID });

        const { month, date } = req.body;

        // Check if tutor already has entry
        if (!allSchedule || allSchedule === null) {
            const newDateCreated = {
                tutorID,
                dates: [{ isAvailable: true, month, date, time: [] }],
            };

            Schedule.create(newDateCreated, (err, doc) => {
                if (err) {
                    return res.status(500).send({
                        status: "ERROR",
                        message: err.message,
                    });
                }

                res.status(201).json({ status: "SUCCESS", data: doc });
                return;
            });
        }

        // Create new date
        const newDate = {
            isAvailable: true,
            month,
            date,
            time: [],
        };

        Schedule.findOneAndUpdate(
            { tutorID },
            { $push: { dates: newDate } },
            {
                new: true,
                useFindAndModify: false,
            },
            (err, doc) => {
                if (err) {
                    return res.status(500).send({
                        status: "ERROR",
                        message: err.message,
                    });
                }

                return res.status(201).send({ status: "SUCCESS", data: doc });
            }
        );
    }
);

// Add new times to day
scheduleRouter.post(
    "/api/schedule/time/:id",
    async (req: Request, res: Response) => {
        const tutorID = req.params.id;
        const { time, date } = req.body;

        Schedule.findOneAndUpdate(
            {
                tutorID,
                dates: { $elemMatch: { date: date } },
            },
            { $push: { "dates.$.time": time } },
            {
                new: true,
                useFindAndModify: false,
            },
            (err, doc) => {
                if (err) {
                    return res.status(500).send({
                        status: "ERROR",
                        message: err.message,
                    });
                }

                return res.status(201).send({ status: "SUCCESS", data: doc });
            }
        );
    }
);

// Delete time inside day
scheduleRouter.delete(
    "/api/schedule/time/:id",
    async (req: Request, res: Response) => {
        const tutorID = req.params.id;
        const { timeID, dateID } = req.body;

        Schedule.findOneAndUpdate(
            {
                tutorID,
                dates: { $elemMatch: { _id: dateID } },
            },
            { $pull: { "dates.$.time": { _id: timeID } } },
            {
                new: true,
                useFindAndModify: false,
            },
            (err, doc) => {
                if (err) {
                    return res.status(500).send({
                        status: "ERROR",
                        message: err.message,
                    });
                }

                return res.status(201).send({ status: "SUCCESS", data: doc });
            }
        );
    }
);

export default scheduleRouter;
