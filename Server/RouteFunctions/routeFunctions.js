import express from 'express';
import MySchema from '../Models/listofevents.js';

const router = express.Router();

router.get('/', (req, res) => {
    const getData = MySchema.find();
    res.json(getData);
});
router.post('/', (req, res) => {
    const myModel = new MySchema({name: "Ujjwal", tile: "NOC TEch", description:"Ujjwal is a bad boy", venue:"USA", people: ["Ram", "Shyam"]});
    myModel.save();
    // res.json(myModel.find());
});


export default router;