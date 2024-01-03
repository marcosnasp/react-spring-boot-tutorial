import React, { useEffect, useState } from "react";
import { createEmployee, getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const {id} = useParams();

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const navigator = useNavigate();
  
  useEffect(() => {
    if (id) {
      getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [id]);

  const {employeeId} = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = {firstName, lastName, email};
    if (validateForm()) {
      if (id) {
        updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch((error) => {
          console.log(error);
        })
      } else {
        createEmployee(employee).then((response) => {
          console.error(response.data);
          navigator('/employees');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  const validateForm = () => {
    let valid = true;
    const errorsCopy = {... errors}

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First Name is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last Name is required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Edit Employee</h2>
    } else {
      return <h2 className="text-center">Add Employee</h2>
    }
  }

  return (
    <div className="container">
      <div className="row" style={{padding: "40px 0px 0px 0px"}}>
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstName}
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  placeholder="Enter Employee First Name"
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Enter Employee Last Name"
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter Employee Email"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <button type="submit" className="btn btn-primary mb-2" onClick={(e) => saveOrUpdateEmployee(e)}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
