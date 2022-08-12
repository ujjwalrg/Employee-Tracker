import AddEmployee from "./addEmployee";
import ListEmployees from "./listEmployees";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "../actions/actionEmployees";
import { useState } from "react";


const BodyContent = () => {
    const [currentID, setCurrentID] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch, currentID]);

    return (
    <main className="mainBody">
    <AddEmployee currentID={currentID} setCurrentID={setCurrentID}/>
    <ListEmployees setCurrentID={setCurrentID} />
    </main>
    );
}

export default BodyContent;