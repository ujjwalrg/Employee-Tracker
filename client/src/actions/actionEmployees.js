import axios from "axios";

const api = "http://127.0.0.1:3001";

export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await axios.get(api);
    dispatch({ type: "GETEMPLOYEES", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

// const getEmployee = async (id) => {
//   try {
//     const { data } = await axios.get(`${api}/${id}`);
//     dispatch({ type: "GETEMPLOYEE", payload: data });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

export const postEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await axios.post(api, employee);
    dispatch({ type: "POSTEMPLOYEE", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateEmployee = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${api}/${id}`, updateData);
    dispatch({ type: "UPDATEEMPLOYEE", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await axios.delete(`${api}/${id}`);
    dispatch({ type: "DELETEEMPLOYEE", payload: id });
  } catch (error) {
    console.error(error.message);
  }
};
