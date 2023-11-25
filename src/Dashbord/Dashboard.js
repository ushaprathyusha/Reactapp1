import React,{ useState, useEffect } from 'react';
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaTh, FaUser } from "react-icons/fa";
import '../Dashbord/Dashboard.css'

const Dashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  useEffect(() => {
    // Simulating data fetching from the database
    const fetchEmployeeData = async () => {
      try {
        // Perform API request or database query to fetch employee data
        // Replace the following code with your actual data fetching logic
        const response = await fetch('http://localhost:3003/employee_data');
        const data = await response.json();
console.log(response);
        // Update the employee data state
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  useEffect(() => {
    // Fetch attendance data
    const fetchAttendanceData = async () => {
      try {
        // Perform API request or database query to fetch attendance data
        const response = await fetch('http://localhost:3003/attendance_dashboard_data');
        const data = await response.json();

        // Update the attendance data state
        setAttendanceData(data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, []);

  const totalDepartments = employeeData.length;
  const totalEmployees = employeeData.length;
  const totalPresentToday = attendanceData.filter(
    (attendance) => attendance.status === 'Present'
  ).length;
  const totalOnLeaveToday = attendanceData.filter(
    (attendance) => attendance.status === 'Absent'
  ).length;

  return (

    <div className='Home1'>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className='home'>
      <div className='outsideborder'>
        <div className='daily'>
          <h1 className='manage-employee'>Dashboard</h1>
          <h1 className='line'></h1>
          <div className='dashboard-header'>
          <div className="box-bg-pink">
                    <p>Total Employees</p>
                  
                    <div className="icon-value">
                      <div className="icon">
                      </div>
                      <FaUsers size={40}/>
                      <p className="value">  {totalEmployees}</p>
                    </div>
                  </div>
                  <div className="box-bg-purple">
                    <p>Total Departments</p>                   
                    <div className="icon-value">
                      <div className="icon">
                        <i className="fa fa-th"></i>
                      </div>
                      <FaTh size={40}/>
                      <p className="value"> {totalDepartments}</p>
                    </div>
                  </div>

                  <div className="box-bg-cyan">
                    <p>Present Today</p>
                  
                    <div className="icon-value">
                      <div className="icon">
                      </div>
                      <FaUser size={40}/>
                      <p className="value">  {totalPresentToday}</p>
                    </div>
                  </div>

                  <div className="box-bg-ash">
                    <p>On Leave Today</p>
                 
                    <div className="icon-value">
                      <div className="icon">
                      </div>
                      <BsFillBookmarkFill size={35}/>
                      <p className="value">   {totalOnLeaveToday}</p>
                    </div>
                  </div>
            {/* <div className='fields'>
              <h1 className='employee'>Total Departments</h1>
              {totalDepartments}
            </div>

            <div className='fields'>
              <h1 className='employee'>Total Employees</h1>
             {totalEmployees}
            </div>

            <div className='fields'>
              <h1 className='employee'>Total Present Today</h1>
              {totalPresentToday}
            </div>
            <div className='fields'>
              <h1 className='employee'>Total On Leave Today</h1>
              {totalOnLeaveToday}
            </div> */}

          </div>
        </div>
      </div>

      <div className='outsideborder'>
        <div className='daily'>
          <h1 className='manage-employee1'>Quote of the Day</h1>
          <h1 className='line'></h1>
          <div className='header'>
            <div className='manage-employee1'>
              Opportunities dont happen, You create them
              -Chris
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
