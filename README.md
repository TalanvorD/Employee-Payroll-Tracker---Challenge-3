# 03 JavaScript: Employee Payroll Tracker

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables a payroll manager to view and manage employee payroll data. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

```md
AS A payroll manager
I WANT AN employee payroll tracker
SO THAT I can see my employees' payroll data and properly budget for the company
```

## Acceptance Criteria

```md
GIVEN an employee payroll tracker
WHEN I click the "Add employee" button
THEN I am presented with a series of prompts asking for first name, last name, and salary
WHEN I finish adding an employee
THEN I am prompted to continue or cancel
WHEN I choose to continue
THEN I am prompted to add a new employee
WHEN I choose to cancel
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data
```

## First notes

I'll begin this project with starter code that will need to be modified. I'll need to take input from a user, the information will be about an employees first and last name as well as their salary. Afterwards the user will be prompted if they wish to continue to enter more data, if so then more input will be accepted and if not then the data will be displayed to the user, sorted alphabetically by last name. Finally the console will show the number of employees as well as the average salary.

## Steps taken

- Created a do while loop inside collectEmployees that prompts the user to enter the employees first name, last name and salary
    - Error checking is in place in case nothing was entered for the names and if a non-number was entered for salary
    - If nothing was entered for salary then that will result in a salary of 0
    - Function will exit if user hits cancel when being asked for input. This will throw an error in the console but that is due to code that cannot be changed based on the assignment downstream.

- Created the function inside of displayAverageSalary that finds the number of employees and the average salary
    - Used a for loop to iterate through the employeeArray to sum all the .salary property of each object together
    - Added a check to see if only one or multiple employees was entered, the output the console is changed based on this context. (I didn't like **employee(s)**)
    - The number of employees and the average salary is written to the console using template literal syntax

- Created the function inside of getRandomEmployee that selects 1 object randomly from the array
    - Finds the random array object using Math.floor, Math.random and employeesArray length
    - Logs the random object to the console using template literal syntax