

# Search And Filter Functionality Assignment

## Overview
The **Search And Filter Functionality Assignment**  is a web application developed using **React** and connected to a backend API for managing employees. The system allows users to perform CRUD operations on employee data, including **viewing**, **editing**, and **deleting** employee records. Additionally, search and filter functionalities are implemented to enhance usability.

### Features:
- **CRUD Operations**: View, Edit, and Delete employee data.
- **Search Functionality**: Search employees by name, email, designation, and course.
- **Course Filter**: Filter employees based on their course selection (BCA, BTECH, MCA, BCOM).
- **Responsive Design**: Fully responsive layout for both mobile and desktop devices.
- **Live Demo**: A live version of the application is available for demonstration.

---

## Tech Stack:
- **Frontend**: 
  - React
  - Vite (for fast builds and hot-reloading)
  - Tailwind CSS (for utility-first styling)
  - React Router DOM (for routing)
  - React Icons (for icons)
  - React Loader Spinner (for displaying loading states)
  
- **API**:
  - RESTful API for managing employee data.

---

## Live Demo:
- **Live Demo**: [MARRF - Employee Management](https://marrf.onrender.com)

---

## GitHub Repository:
- **GitHub Repo**: [https://github.com/techjmi/marrf](https://github.com/techjmi/marrf)

---

## Getting Started

To clone and run this project locally, follow these steps:

### Prerequisites:
1. **Node.js** (v14 or higher)
2. **NPM** (Node Package Manager, which comes with Node.js)
3. **Git** (for cloning the repository)

### Steps to Clone and Run Locally:

#### 1. Clone the repository:
```bash
git clone https://github.com/techjmi/marrf.git
```

#### 2. Navigate to the project folder:
```bash
cd marrf
```

#### 3. Install the dependencies:
```bash
npm install
```

#### 4. Set up environment variables:
Create a `.env` file in the root directory and add your environment variables:
```plaintext
REACT_APP_API_URL=https://deals-dray-backend.onrender.com/api/employee
```

#### 5. Run the application:
For the frontend (React app):
```bash
npm run dev
```

This will start the development server and open the app in your browser at `http://localhost:5173`.

---

## API Documentation:

### **1. Get Employee List**
**URL**: `/api/employee/emp_list`  
**Method**: `GET`  
**Description**: Fetches the list of all employees.  
**Response**:  
```json
[
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "MobileNo": "1234567890",
    "Designation": "Developer",
    "Gender": "Male",
    "course": ["BCA"],
    "image": "https://image-link.com",
    "empID": 1,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  ...
]
```

---

### **2. Edit Employee**
**URL**: `/api/employee/emp_edit/:id`  
**Method**: `PUT`  
**Description**: Edits the details of an employee.  
**Request Body**:  
```json
{
  "fullName": "Updated Name",
  "email": "updatedemail@example.com",
  "MobileNo": "0987654321",
  "Designation": "Updated Designation",
  "Gender": "Female",
  "course": ["BTECH"],
  "image": "https://new-image-link.com"
}
```

**Response**:  
```json
{
  "message": "Employee details updated successfully"
}
```

---

### **3. Delete Employee**
**URL**: `/api/employee/emp_delete/:id`  
**Method**: `DELETE`  
**Description**: Deletes an employee by ID.  
**Response**:  
```json
{
  "message": "Employee deleted successfully"
}
```

---

### **4. Get Single Employee by ID**
**URL**: `/api/employee/employee/:id`  
**Method**: `GET`  
**Description**: Fetches a single employee's data by ID.  
**Response**:  
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "MobileNo": "1234567890",
  "Designation": "Developer",
  "Gender": "Male",
  "course": ["BCA"],
  "image": "https://image-link.com",
  "empID": 1,
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

---

## Frontend Details:

### Features:
- **Search Functionality**: Users can search employees by name, email, or designation.
- **Course Filter**: Users can filter employees based on the course (`BCA`, `BTECH`, `MCA`, `BCOM`).
- **Responsive Layout**: The app adapts to mobile, tablet, and desktop screens using Tailwind CSS.

---

## Conclusion:
This project provides a simple yet powerful solution for managing employee data with a well-structured API and a responsive frontend. You can easily view, edit, and delete employee records, while also filtering based on specific criteria like name, email, designation, and course. 

---

### Created by:
**Md Shamim Akhter**  
[Portfolio](https://shamim-portfolio-u1yp.onrender.com)  

