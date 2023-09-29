import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {

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

  return (
    <div className="App">
      {showEmployees ? (
        <header className="App-header">
          <input type="text" onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }} />
          <div className="flex flex-wrap justify-center">
            {
              employees.map((employee) => {
                console.log(employee)
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee}
                  />
                )
              })
            }
          </div>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> )
        : (<p>There are no employees to show!</p>)}
    </div>
  )
}

export default App;
