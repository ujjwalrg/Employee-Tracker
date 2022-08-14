import { useState, useEffect } from "react";
import { postEmployee, updateEmployee } from "../actions/actionEmployees";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
const AddEmployee = ({ currentID, setCurrentID }) => {
  const [currentState, setCurrentState] = useState({
    name: "",
    title: "",
    address: "",
    number: 0,
    picture: "",
    skills: [""],
    salary: 0,
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
      address: "",
      number: 0,
      picture: "",
      skills: [""],
      salary: 0,
    });
  };

  document.addEventListener("wheel", function (event) {
    if (
      document.activeElement.type === "number" &&
      document.activeElement.classList.contains("noscroll")
    ) {
      document.activeElement.blur();
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // const [name, title, address, number, picture, skills, salary] = e.target;
    // const num = parseInt(number.value);
    // const amount = parseInt(salary.value);
    // console.log(picture);
    // console.log(name.value);
    // console.log(picture.files[0]);
    // const data = {
    //   name: name.value,
    //   title: title.value,
    //   address: address.value,
    //   number: num,
    //   picture: JSON.stringify(picture.files[0]),
    //   skills: skills.value,
    //   salary: amount,
    // };
    // console.log(data);

    if (myState) {
      dispatch(updateEmployee(currentState._id, currentState));
      //data
      resetForm();
    } else {
      dispatch(postEmployee(currentState));
      //data
      resetForm();
    }
  };

  return (
    <div className="formclass">
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
          Phone No:
          <input
            type="number"
            placeholder="18082918247"
            name="number"
            form="myform"
            className="noscroll"
            value={currentState.number ? currentState.number : ""}
            onChange={(e) =>
              setCurrentState({ ...currentState, number: e.target.value })
            }
            required
          />
        </label>
        <label>
          Picture
          {/* <input
            type="file"
            name="picture"
            form="myform"
            onChange={(e) =>
              setCurrentState({ ...currentState, picture: e.target.files[0] })
            }
          /> */}
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setCurrentState({ ...currentState, picture: base64 })
            }
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
        <label>
          Salary:
          <input
            type="number"
            placeholder="$200000"
            name="salary"
            form="myform"
            className="noscroll"
            value={currentState.salary ? currentState.salary : ""}
            onChange={(e) =>
              setCurrentState({ ...currentState, salary: e.target.value })
            }
            required
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
