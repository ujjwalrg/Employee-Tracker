const reducerFunc = (employees = [], action) => {
  switch (action.type) {
    case "GETEMPLOYEES":
      return action.payload;
    case "GETEMPLOYEE":
      return action.payload;
    case "POSTEMPLOYEE":
      return [...employees, action.payload];
    case "UPDATEEMPLOYEE":
      return employees.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee
      );
    case "DELETEEMPLOYEE":
      console.log(`reducer ${action.payload}`);
      return employees.filter((employee) => employee._id !== action.payload);

    default:
      return employees;
  }
};

export default reducerFunc;
