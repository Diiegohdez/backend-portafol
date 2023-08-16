import mongoose from "mongoose";

const informSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    _id:{
        type: Number,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    repositorio:{
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export default mongoose.model("Inform", informSchema);