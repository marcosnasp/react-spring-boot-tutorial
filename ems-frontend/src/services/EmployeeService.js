import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/employees";

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployeeById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee);

export const removeEmployee = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);