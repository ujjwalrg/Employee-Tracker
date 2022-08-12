import { useSelector } from 'react-redux';
import ListEmployee from './listEmployee'

const ListEmployees= ({setCurrentID}) => {
    const employees = useSelector(state => state.employees);
    // console.log(employees);
    return (
        <div className='listEmployees'>
            {employees.map((employee) => (
                // console.log(employee);
                <ListEmployee key={employee._id} setCurrentID={setCurrentID}  employee={employee}/>
))}
    </div>
    );
}

export default ListEmployees;