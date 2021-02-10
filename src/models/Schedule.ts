import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
    tutorID: {
        type: String,
        required: true,
    },
    obs: String,
    dates: [
        {
            month: String,
            date: String,
            time: [
                {
                    from: String,
                    to: String,
                },
            ],
            isAvailable: {
                type: Boolean,
                default: false,
            },
        },
    ],
});

export default mongoose.model("Schedules", ScheduleSchema);
