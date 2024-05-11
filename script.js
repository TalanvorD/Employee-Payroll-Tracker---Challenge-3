// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Declaring the employeesArray in global scope
const employeesArray = [];

// Collect employee data
  // TODO: Get user input to create and return an array of employee objects
  const collectEmployees = function() {

    let isConfirm = true;
    do {
      let tempFirstName = "";
      let tempLastName = "";
      let tempSalary = "";
      tempFirstName = window.prompt("Enter first name:"); // Asks the user for the first name
      if (tempFirstName === "") { // Validates the first name input
        tempFirstName = window.prompt("Please enter the employees first name:"); // If the user didn't enter a first name asks again
      }
      tempLastName = window.prompt("Enter last name:"); // Asks the user for the last name
      if (tempLastName === "") { // Validates the last name input
        tempLastName = window.prompt("Please enter the employees last name:"); // If the user didn't enter a last name asks again
      }
      tempSalary = window.prompt("Enter employee salary:"); // Asks the user for the salary
      if (tempSalary === "") { // Checks to see if no input was entered and changes the value to be 0
        tempSalary = 0;
      }
      while (isNaN(tempSalary)) { // Validates the salary input
        tempSalary = window.prompt("Please enter a valid salary:"); // If the user didn't enter a valid salary asks again
      }
      tempSalary = parseFloat(tempSalary); // Converts tempSalary into a float so other functions downstream expecting a number work properly
      employeesArray.push({firstName: tempFirstName, lastName: tempLastName, salary: tempSalary}); // Pushes the input to the array
      isConfirm = confirm("Do you want to add another employee?"); // Asks if the user wants to add another user
    }
    while (isConfirm === true) // Condition for the while loop to continue
    
  return (employeesArray); // Returns the array
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let totalEmployees = employeesArray.length;
  //totalEmployees = employeesArray.length;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += +employeesArray[i].salary;
  }
  let averageSalary = (totalSalary / totalEmployees); // Finding the average
  averageSalary = averageSalary.toLocaleString("en-US",{style:"currency",currency:"USD"}); // Converting number to string with USD notation
  console.log(`The average employee salary between our ${totalEmployees} employee(s) is ${averageSalary}`); // Writing the average salary and number of employees to the console
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = (Math.floor(Math.random() * employeesArray.length)); // Getting a random number from the length of the array
  console.log(`Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`); // Displays the random array object to the console
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
