import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    title: String,
    address: String,
    number: Number,
    picture: String,
    skills: [String],
    salary: {
        type: Number,
        default: 0,
    },
    dateHired: {
        type: Date,
        default: new Date(),
    }
});

var MySchema = mongoose.model('MySchema', schema);
export default MySchema;