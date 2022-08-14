import { useSelector } from "react-redux";
import ListEmployee from "./listEmployee";

const ListEmployees = ({ setCurrentID }) => {
  const employees = useSelector((state) => state.employees);

  return employees.length > 0 ? (
    <div className="listEmployees">
      {employees.map((employee) => {
        return (
          <ListEmployee
            key={employee._id}
            setCurrentID={setCurrentID}
            employee={employee}
          />
        );
      })}
    </div>
  ) : (
    <div style={{ fontSize: "2rem", fontWeight: "bolder", color: "red" }}>
      Loading Employeesss
    </div>
  );
};

export default ListEmployees;
