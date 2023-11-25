import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageEmployee.css';

const ManageEmployee = () => {
  const [employeeList, setemployeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    setLoading(true);
    setError(null);

    axios
      .get('http://localhost:3003/employee_data')
      .then(response => {
        const fetchedData = response.data;
        console.log(fetchedData);
        const dataWithEmpId = fetchedData.map(employee => ({
          fullname: employee.fullname,
          fathername: employee.fathername,
          gender: employee.gender,
          maritalstatus: employee.maritalstatus,
          dateofbirth: employee.dateofbirth,
          email: employee.email,
          phone1: employee.phone1,
          phone2: employee.phone2,
          address:employee.address,
          permaentaddress: employee.permaentaddress,
          employeeid: employee.employeeid,
          isSelected: false
        }));

        setemployeeList(dataWithEmpId);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleDateChange = (event, index) => {
    const updatedList = [...employeeList];
    updatedList[index].dateofbirth = event.target.value;
    setemployeeList(updatedList);
  };

  const handleFullNameChange = (event, index) => {
    const updatedList = [...employeeList];
    updatedList[index].fullname = event.target.value;
    setemployeeList(updatedList);
  };

  const handleDescriptionChange = (event, index) => {
    const updatedList = [...employeeList];
    updatedList[index].fullname = event.target.value;
    setemployeeList(updatedList);
  };

  const handleCheckboxChange = (event, index) => {
    const updatedList = [...employeeList];
    updatedList[index].isSelected = !updatedList[index].isSelected;
    setemployeeList(updatedList);
  };

  const handleDeleteClick = () => {
    const selectedRecords = employeeList.filter(employee => employee.isSelected);

    console.log('selectedRecords: ', selectedRecords);

    const deletePromises = selectedRecords.map(record => {
      const url = `http://localhost:3003/employee_data/${encodeURIComponent(record.employeeid)}`;
      return axios.delete(url);
    });

    Promise.all(deletePromises)
      .then(() => {
        const updatedList = employeeList.filter(employee => !employee.isSelected);
        setemployeeList(updatedList);
        alert('Deleted Successfully');
      })
      .catch(error => {
        alert('Not Deleted Successfully', error);
      });
  };

  const handleUpdateClick = () => {
    console.log('updated ', employeeList);
    axios
      .put('http://localhost:3003/employee_data', employeeList)
      .then(() => {
        alert('Updated Successfully');
      })
      .catch(error => {
        alert('Not Updated Successfully', error);
      });
  };

  return (
    <div className='Home99'>
    <div className='home99'>
      <br></br>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='outsideborder99'>
        <div className='daily99'>
          <h1 className='manage-employee99'>Manage Employees</h1>
          <h1 className='line99'></h1>

         
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <table className='manage-table99'>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Full Name</th>
                  <th>Father Name</th>
                  <th>Gender</th>
                  <th>Date</th>
                  <th>martial status</th>
                  <th>email</th>
                  <th>phone1</th>
                  <th>phone2</th>
                  <th>Address</th>
                  <th>permanentaddress</th>
                 
                </tr>
              </thead>
              <tbody>
                {employeeList.map((employee, index) => (
                  
                  <tr key={employee.employeeid}>
                    <td>{employee.employeeid}</td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.fullname}
                        onChange={event => handleFullNameChange(event, index)}
                      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.fathername}
                        onChange={event => handleFullNameChange(event, index)}
                      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.gender}
                        onChange={event => handleFullNameChange(event, index)}
                      />
                    </td>
                    <td>
                    <input
        type='date'
        value={new Date(employee.dateofbirth).toLocaleDateString('en-CA')}
        onChange={event => handleDateChange(event, index)} // Updated the event handler here
      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.maritalstatus}
                        onChange={event => handleFullNameChange(event, index)}
                      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.phone1}
                        onChange={event => handleDescriptionChange(event, index)}
                      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.phone2}
                        onChange={event => handleDescriptionChange(event, index)}
                      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.email}
                        onChange={event => handleDescriptionChange(event, index)}
                      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.address}
                        onChange={event => handleDescriptionChange(event, index)}
                      />
                    </td>
                    <td>
                      <input
                        type='manage-text'
                        value={employee.permaentaddress}
                        onChange={event => handleDescriptionChange(event, index)}
                      />
                    </td>
                  
                   
                    <td>
                      <input
                        type='checkbox'
                        checked={employee.isSelected}
                        onChange={event => handleCheckboxChange(event, index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <button className='manage-button199' onClick={handleUpdateClick}>Update</button>
        <button className='manage-button99' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
    </div>
  );
};

export default ManageEmployee;
