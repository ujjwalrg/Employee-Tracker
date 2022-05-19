import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    venue: String,
    people: [String],
    likeCount: {
        type: Number,
        default: 0,
    },
    dateCreated: {
        type: Date,
        default: new Date(),
    }
});

var MySchema = mongoose.model('MySchema', schema);
export default MySchema;