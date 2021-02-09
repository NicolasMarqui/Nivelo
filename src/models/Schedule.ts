import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
    tutorID: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: false,
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
        },
    ],
});

export default mongoose.model("Schedules", ScheduleSchema);
