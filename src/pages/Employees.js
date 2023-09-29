import '../App.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';

function Employees() {

  const showEmployees = true;
  const [role, setRole] = useState('');

  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Tamojit",
        role: "Dev",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg"
      },
      {
        id: 2,
        name: "Tamojit",
        role: "Dev",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg"
      },
      {
        id: 3,
        name: "Tamojit",
        role: "Dev",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg"
      },
      {
        id: 4,
        name: "Tamojit",
        role: "Dev",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg"
      },
      {
        id: 5,
        name: "Tamojit",
        role: "Dev",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg"
      },
      {
        id: 6,
        name: "Tamojit",
        role: "Dev",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg"
      },
      {
        id: 7,
        name: "Tamojit",
        role: "Dev",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg"
      }
    ]
  )

  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map((employee) => {
      if(id == employee.id) {
        return {...employee, name: newName, role: newRole}
      }
      return employee;
    });
    setEmployees(updatedEmployee)
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? (
        <header className="App-header">
          <div className="flex flex-wrap justify-center">
            {
              employees.map((employee) => {
                const editEmployee = (
                  <EditEmployee 
                    id={employee.id} 
                    name={employee.name} 
                    role={employee.role} 
                    updateEmployee={updateEmployee} 
                  />
                );
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    editEmployee={editEmployee}
                  />
                )
              })
            }
          </div>
        </header> )
        : (<p>There are no employees to show!</p>)}
        <AddEmployee newEmployee={newEmployee} />
    </div>
  )
}

export default Employees;
