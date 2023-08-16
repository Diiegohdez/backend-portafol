import Inform from "../models/inform.js";

export const getImform = async (req, res)=>{
    const inform = await Inform.find()
    res.json(inform);
};


export const postInform = async (req, res)=>{
    const {name, img, _id, url, repositorio} = req.body
    const newInform = new Inform({
        name,
        img,
        _id,
        url,
        repositorio,
    })
    const savedInform = await newInform.save();
    res.json(savedInform);
};