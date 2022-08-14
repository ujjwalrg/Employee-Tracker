import express from "express";
import mongoose from "mongoose";
import MySchema from "../Models/employeeModels.js";

// const router = express.Router(); export default missing
const getEmployees = async (req, res) => {
  try {
    // await MySchema.deleteMany({ number: { $gt: 0 } });
    // await MySchema.save();
    const getData = await MySchema.find();
    res.status(203).json(getData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const getData = await MySchema.findById(id);
    res.status(200).json(getData);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, title, number, address, salary, skills, picture } = req.body;
  const updatedEmployee = {
    name,
    title,
    number,
    address,
    salary,
    skills,
    picture,
    _id: id,
  };
  try {
    const updateData = await MySchema.findByIdAndUpdate(id, updatedEmployee, {
      new: true,
    });

    // console.log(updateData);
    res.json(updateData);
  } catch (err) {
    res.status(405).json({ message: err.message });
  }
};

const postEmployee = async (req, res) => {
  try {
    const { name, title, skills, picture, number, address, salary } = req.body;
    const myModel = new MySchema({
      name,
      salary,
      title,
      address,
      picture,
      number,
      skills,
    });
    await myModel.save();
    res.status(201).json(myModel);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json(`Found no employees with the id ${id}`);
    }
    await MySchema.findByIdAndRemove(id);
    res.json({ message: "Successfully deleted the employee" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export {
  getEmployees,
  postEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
