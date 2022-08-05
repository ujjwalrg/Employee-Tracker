import AddEmployee from "./addEmployee";
import ListEmployees from "./listEmployees";


const BodyContent = () => {
    return (
    <main className="mainBody">
    <AddEmployee />
    <ListEmployees />
    </main>
    );
}

export default BodyContent;