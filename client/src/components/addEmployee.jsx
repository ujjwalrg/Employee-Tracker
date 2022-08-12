import { useState, useEffect } from "react";
import { postEmployee, updateEmployee } from "../actions/actionEmployees";
import { useDispatch, useSelector } from "react-redux";
const AddEmployee = ({ currentID, setCurrentID }) => {
  const [currentState, setCurrentState] = useState({
    name: "",
    title: "",
    number: "",
    address: "",
    skills: [""],
    salary: "",
    picture: "",
  });
  const myState = useSelector((state) =>
    currentID
      ? state.employees.find((employee) => employee._id === currentID)
      : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (myState) setCurrentState(myState);
  }, [myState]);

  const resetForm = () => {
    setCurrentID(0);
    setCurrentState({
      name: "",
      title: "",
      number: 0,
      address: "",
      salary: 0,
      skills: [""],
      picture: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, title, number, salary, address, skills] = e.target;
    const num = parseInt(number.value);
    const amount = parseInt(salary.value);
    console.log(name.value);
    console.log(amount);
    const data = {
      name: name.value,
      title: title.value,
      address: address.value,
      number: num,
      skills: skills.value,
      salary: amount,
      picture: "PIC",
    };
    console.log(data);

    if (myState) {
      dispatch(updateEmployee(currentState._id, data));
      resetForm();
    } else {
      dispatch(postEmployee(data));
      resetForm();
    }
  };

  return (
    <div class="formclass">
      <form
        key={currentID}
        id="myform"
        className="employeeForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* <fieldset> */}
        {currentID ? (
          <legend>Update an Employee</legend>
        ) : (
          <legend>Add an Employee</legend>
        )}
        <label>
          NAME:
          <input
            type="text"
            placeholder="Leo Messi"
            name="name"
            form="myform"
            value={currentState.name}
            onChange={(e) =>
              setCurrentState({ ...currentState, name: e.target.value })
            }
            required
          />
        </label>
        <label>
          JOB TITLE:
          <input
            type="text"
            placeholder="Jr. Developer"
            name="title"
            form="myform"
            value={currentState.title}
            onChange={(e) =>
              setCurrentState({ ...currentState, title: e.target.value })
            }
            required
          />
        </label>
        <label>
          Phone No:
          <input
            type="number"
            placeholder="18082918247"
            name="number"
            form="myform"
            value={currentState.number ? currentState.number : ""}
            onChange={(e) =>
              setCurrentState({ ...currentState, number: e.target.value })
            }
            required
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            placeholder="$200000"
            name="salary"
            form="myform"
            value={currentState.salary ? currentState.salary : ""}
            onChange={(e) =>
              setCurrentState({ ...currentState, salary: e.target.value })
            }
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            placeholder="CA, USA"
            name="address"
            form="myform"
            value={currentState.address}
            onChange={(e) =>
              setCurrentState({ ...currentState, address: e.target.value })
            }
            required
          />
        </label>
        <label>
          Skills
          <input
            type="text"
            placeholder="HTML, CSS, ..."
            name="skills"
            form="myform"
            value={currentState.skills}
            onChange={(e) =>
              setCurrentState({ ...currentState, skills: e.target.value })
            }
          />
        </label>
        <input type="submit" />
        <input type="reset" onClick={(e) => resetForm()} />
        {/* </fieldset> */}
      </form>
    </div>
  );
};

export default AddEmployee;
