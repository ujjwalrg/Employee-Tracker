import axios from "axios";
// import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


const api = 'http://127.0.0.1:3001';

const dispatch = useDispatch();

const getEmployees = async () => {
    try {
    const { data } = await axios.get(api);
    dispatch({type: 'FETCHALL', payload: data});
    }
    catch(error){
        console.log(error.message);
    }
}

const postEmployee = async(id) => {
    try {
        const { data } = await axios.get(`${api}/${id}`);

    } catch (error) {
        
    }
}
  