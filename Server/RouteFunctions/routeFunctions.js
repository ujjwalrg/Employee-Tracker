import express from 'express';
import MySchema from '../Models/listofevents.js';

const getAllData = async (req, res) => {
    try {
    const getData = await MySchema.find();
    res.json(getData);
    } catch(error) {
        res.status(404).json({message:error})
    }
}

const postData = async(req, res) => {
    try {
        const myModel = new MySchema({name: "Ujjwal", tile: "NOC Tech", description:"Ujjwal is a bad boy", venue:"USA", people: ["Ram", "Shyam"]});
        await myModel.save();
    } catch(error) {
        res.status(409).json({message:error})
    }
        // res.json(myModel.find());
};

