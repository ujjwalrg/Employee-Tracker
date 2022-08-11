import axios from "axios";
// import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const api = "http://127.0.0.1:3001";

const dispatch = useDispatch();

const getEmployees = async () => {
  try {
    const { data } = await axios.get(api);
    dispatch({ type: "GETEMPLOYEES", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

const getEmployee = async (id) => {
  try {
    const { data } = await axios.get(`${api}/${id}`);
    dispatch({ type: "GETEMPLOYEE", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

const postEmployee = async (id) => {
  try {
    const { data } = await axios.post(`${api}/${id}`);
    dispatch({ type: "POSTEMPLOYEE", payload: data });
  } catch (error) {
    console.error(error);
  }
};

const updateEmployee = async (id, updateData) => {
  try {
    const { data } = await axios.patch(`${api}/${id}`, updateData);
    dispatch({ type: "UPDATEEMPLOYEE", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${api}/${id}`);
    dispatch({ type: "DELETEEMPLOYEE", payload: id });
  } catch (error) {
    console.error(error.message);
  }
};
