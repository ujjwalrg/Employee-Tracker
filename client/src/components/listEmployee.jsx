import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../actions/actionEmployees";
const ListEmployee = ({ setCurrentID, employee }) => {
  const dispatch = useDispatch();
  return (
    <Card className="listEmployee">
      <Card.Img
        variant="top"
        src="../images/zahir-namane-hwc7eIQiTCE-unsplash.jpg"
        className="card-image"
      />
      <Card.Body className="cardbody">
        <Card.Title className="cardtitle">
          <b>{employee.name}</b>
        </Card.Title>
        <Card.Subtitle>{employee.title}</Card.Subtitle>
        <Card.Subtitle>{employee.address}</Card.Subtitle>
        <Card.Subtitle>
          <span>{employee.number}</span>
        </Card.Subtitle>
        <Card.Text style={{ margin: "0px" }}>
          <span style={{ color: "blue", fontWeight: "bolder" }}>Skills:</span>{" "}
          <i>{employee.skills}</i>
        </Card.Text>
        <Card.Text>
          <span style={{ color: "purple", fontWeight: "bolder" }}>Salary:</span>{" "}
          <b>{employee.salary}</b>
        </Card.Text>
      </Card.Body>
      <Button
        variant="outline-primary"
        className="card-button"
        onClick={() => setCurrentID(employee._id)}
      >
        Edit
      </Button>
      <Button
        variant="danger"
        id="editbtn"
        className="card-button"
        onClick={() => {
          dispatch(deleteEmployee(employee._id));
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default ListEmployee;
