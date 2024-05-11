// Get a reference to the #add-employees-btn element
const employeesArray = [];

const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data

  // TODO: Get user input to create and return an array of employee objects
  const collectEmployees = function() {

  let isConfirm = true;
    do {
      let tempFirstName = "";
      let tempLastName = "";
      let tempSalary = "";
      tempFirstName = window.prompt("Enter first name:");
      if (tempFirstName === "") {
        tempFirstName = window.prompt("Please enter the employees first name:");
      }
      tempLastName = window.prompt("Enter last name:");
      if (tempLastName === "") {
        tempLastName = window.prompt("Please enter the employees last name:");
      }
      tempSalary = window.prompt("Enter employee salary:");
      if (isNaN(tempSalary) || tempSalary === "") {
        tempSalary = window.prompt("Please enter a valid number:");
      }
      employeesArray.push({firstName: tempFirstName, lastName: tempLastName, salary: tempSalary});
      isConfirm = confirm("Do you want to add another employee?");
    }
    while (isConfirm === true)
    
    return (employeesArray);
}

console.log(employeesArray);

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = (Math.floor(Math.random() * employeesArray.length));
  console.log(randomEmployee);
  console.log(`Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
