import express from 'express';
import MySchema from '../Models/employeeModels.js';

const getEmployees = async (req, res) => {
    try {
    const getData = await MySchema.find();
    res.status(203).json(getData);
    } catch(error) {
        res.status(404).json({message:error})
    }
}

const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const getData = await MySchema.findById(id);
        res.status(200).json(getData);
    } catch (err) {
        res.status(404).json({message : err.message});
    }
}

const updateEmployee =  async (req, res) => {
    const { id } = req.params;
    const { name, title, skills, picture, number, address, salary} = req.body;
    const updatedEmployee = {name, title, skills, picture, number, address, salary, _id: id};
    try {
        const updateData = await MySchema.findByIdAndUpdate(id, updatedEmployee, {new : true})
        res.json(updateData);
    } catch(err) {
        res.status(404).json({message: err.message});
    }

}

const postEmployee = async(req, res) => {
    try {
        const myModel = new MySchema({name: "Ujjwal", tile: "NOC Tech", address:"2494 south park, Honolulu, Hi, 98298", picture: "picture", number:8084766127, skills: ["Java", "Javascript"]});
        await myModel.save();
    } catch(error) {
        res.status(409).json({message:error})
    }
        // res.json(myModel.find());
};

const deleteEmployee = async(req, res) => {
    const { id } = req.params;
 try {
    await MySchema.findByIdAndRemove(id);
    res.json({message: "Successfully deleted the employee"});
 } catch (err) {
    res.status(404).json({message : err.message});
 }

}

export {getEmployees, postEmployee, getEmployee, updateEmployee, deleteEmployee}