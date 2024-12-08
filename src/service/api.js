import axios from "axios";

const url_emp = 'https://deals-dray-backend.onrender.com/api/employee';

// Calling employee API to get all employees
export const allEmp = async () => {
  try {
    const response = await axios.get(`${url_emp}/emp_list`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching employees:", error.message, error.response?.data?.message);
    throw error;
  }
};

// Calling employee API to edit an employee
export const EditEmpApi = async (id, data) => {
  try {
    const response = await axios.put(`${url_emp}/emp_edit/${id}`, data);
    return response;
  } catch (error) {
    console.error("Error while editing employee:", error.message);
    throw error;
  }
};

// Calling employee API to delete an employee
export const Delete_Emp = async (id) => {
  try {
    const response = await axios.delete(`${url_emp}/emp_delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while deleting employee:", error.message);
    throw error;
  }
};

// Calling employee API to get single employee by ID
export const SingleEmp = async (id) => {
  try {
    const response = await axios.get(`${url_emp}/employee/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching employee data:", error.message);
    throw error;
  }
};
