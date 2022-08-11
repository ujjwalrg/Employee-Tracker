export default reducer = (employees = [], action) => {
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
      return employees.filter(
        (employee) => employee._id !== action.payload._id
      );

    default:
      return employees;
  }
};
