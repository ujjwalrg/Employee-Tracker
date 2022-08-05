const AddEmployee = () => {

    const handleSubmit = (e) => {
         const[name, title] = e.target.value;
        e.preventDefault();
        // console.log(e.target);
        console.log(name)
    }
    return (
            <form className="employeeForm" onSubmit={(e) => handleSubmit(e)}>
        <legend>Add an Employee</legend>
        <input type='text' placeholder='Name' name='name' required />
        <input type='text' placeholder='Title' name='title' required />
        <input type= 'number' placeholder='Contact Number' name='number' required />
        <input type='number' placeholder ='Salary' name='salary' required />
        <input type ='text' placeholder = 'Address' name = 'address' required />
        <input type='text' placeholder = 'Skills' name = 'skills' />
        <input type='submit'/>
          </form>
    );
}

export default AddEmployee;