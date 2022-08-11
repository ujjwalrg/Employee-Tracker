import AddEmployee from "./addEmployee";
import ListEmployees from "./listEmployees";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetEmployees } from "../actions/actionEmployees";


const BodyContent = () => {
    return (
    <main className="mainBody">
    <AddEmployee />
    <ListEmployees />
    </main>
    );
}

export default BodyContent;