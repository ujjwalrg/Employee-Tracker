import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../actions/actionEmployees";
const ListEmployee = ({ setCurrentID, employee }) => {
  const dispatch = useDispatch();
  return (
    // <figure class="snip1336">
    //   <img
    //     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //     alt="sample87"
    //   />
    //   <figcaption>
    //     <img
    //       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg"
    //       alt="profile-sample4"
    //       class="profile"
    //     />
    //     <h2>
    //       Hans Down<span>Engineer</span>
    //     </h2>
    //     <p>
    //       I'm looking for something that can deliver a 50-pound payload of snow
    //       on a small feminine target. Can you suggest something? Hello...?{" "}
    //     </p>
    //     <a href="#" class="follow">
    //       Follow
    //     </a>
    //     <a href="#" class="info">
    //       More Info
    //     </a>
    //   </figcaption>
    // </figure>
    <figure className="listEmployee">
      <img
        src="../images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg"
        className="card-image"
        alt="image1"
      />
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
