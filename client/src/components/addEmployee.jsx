import { useState, useEffect } from "react";
import { postEmployee, updateEmployee } from "../actions/actionEmployees";
import { useDispatch, useSelector } from "react-redux";
const AddEmployee = ({currentID, setCurrentID}) => {
    const [currentState, setCurrentState] = useState({name: '', title:'', number: '', address: '', skills: [''], salary: 0, picture: ''});
    const myState = useSelector((state) => (currentID ? state.employees.find(employee => employee._id === currentID) : null));
    const dispatch = useDispatch();
    console.log(currentID);
    // useEffect(() => {
    //     dispatch(getEmployees());
    // }, [dispatch]);
    // myState.map(state => {
    //     // console.log(state);    
    // })

    useEffect(() => {
        if (myState) setCurrentState(myState);
    }, [myState])

    const resetForm = () =>{
        setCurrentID(0);
        setCurrentState({name: '', title:'', number: '', address: '', skills: [''], salary: 0, picture: ''});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const [name, title, number, salary, address, skills] = e.target;
        const data = {
            name: name.value,
            title: title.value,
            address: address.value,
            number: number.value,
            skills: skills.value,
            salary: salary.value,
            picture: "PIC",
        };
        // console.log(myState);
        if (myState) {
            // console.log(`sad ${currentState._id}`)
            dispatch(updateEmployee(currentState._id, data));
            resetForm();
        }
        else
        {
        dispatch(postEmployee(data));  
        resetForm();      
        }
    }

    return (
            <form  key={currentID} className="employeeForm" onSubmit={(e) => handleSubmit(e)}>
                {currentID ? <legend>Update ann Employee</legend> : <legend>Add an Employee</legend>}
        <input type='text' placeholder='Name' name='name' value={currentState.name} onChange={e => setCurrentState({...currentState, name:e.target.value})} required />
        <input type='text' placeholder='Title' name='title' value={currentState.title} onChange={e => setCurrentState({...currentState, title:e.target.value})} required />
        <input type= 'number' placeholder='Contact Number' name='number' value={currentState.number}onChange={e => setCurrentState({...currentState, number:e.target.value})} required />
        <input type='number' placeholder ='Salary' name='salary' value={currentState.salary} onChange={e => setCurrentState({...currentState, salary:e.target.value})}required />
        <input type ='text' placeholder = 'Address' name = 'address' value={currentState.address} onChange={e => setCurrentState({...currentState, address:e.target.value})} required />
        <input type='text' placeholder = 'Skills' name = 'skills' value={currentState.skills}  onChange={e => setCurrentState({...currentState, skills:e.target.value})}/>
        <input type='submit'/>
        <input type='reset' onClick={(e) => resetForm()} />
          </form>
    );
}

export default AddEmployee;