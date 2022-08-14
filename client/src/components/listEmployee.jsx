import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../actions/actionEmployees";
const ListEmployee = ({ setCurrentID, employee }) => {
  const dispatch = useDispatch();
  return (
    <figure className="listEmployee">
      <img
        src={
          employee.picture ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYv9NpOAXWseoVckn-FV3xF1c-bRRryH_bW7mfIfJmQ&s"
        }
        className="card-image"
        alt="image1"
      />
      {/* <img
        src="../images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
        className="card-image"
        alt="image1"
      /> */}
      <figcaption className="cardbody">
        <h1>{employee.name}</h1>
        <p>{employee.title}</p>
        <div>
          <p>
            <span>Address: </span>
            {employee.address}
          </p>
          <p>
            <span>Cell: </span>
            {employee.number}
          </p>
          <p>
            <span>Skills:</span>
            <i>{employee.skills}</i>
          </p>
          <p>
            <span>Salary: </span>
            <i>${employee.salary}</i>
          </p>
        </div>
        <button
          className="card-button"
          onClick={() => setCurrentID(employee._id)}
        >
          Edit
        </button>
        <button
          id="editbtn"
          className="card-button"
          onClick={() => {
            dispatch(deleteEmployee(employee._id));
          }}
        >
          Delete
        </button>
      </figcaption>
    </figure>
  );
};

export default ListEmployee;
