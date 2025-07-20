import mongoose from "mongoose";
const NewsSchema = new mongoose.Schema({
    date: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});
export default mongoose.model('News', NewsSchema);