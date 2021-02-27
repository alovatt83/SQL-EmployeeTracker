const inquirer = require("inquirer");
const mysql = require('mysql');
const tables = require('console.table');

const db = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "Greedy10",
    database: "allemployee"
});

inquirer.prompt({

    name: 'menuQuestions',
    type: 'list',
    message: 'Select an option: '
    choices: [
        'View all departments', 
        'View all roles', 
        'View all employees', 
        'Add a department', 
        'Add a role', 
        'Add an employee', 
        'Update an employee role', 
        'Quit']

loopQuestions()
async function loopQuestions() {

const results = await inquirer.prompt(menuQuestions.actions);
   
    switch (response.menuQuestions) {
        case "View all departments":
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case 'View all employees':
            viewEmployees();
            break;
        case 'Add a department':
            addDep();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update an employee role':
            updateEmployee();
            break;
        case 'Quit':
            connection.end();
            break;
            }
    
    ]);

}

function viewDepartments() {

    connection.query("SELECT name AS Departments FROM department ", function (err, results) {
        console.table(results);
        if (err) throw err;
        determineAction()
    });
}

function viewRoles() {
    connection.query("SELECT title AS Roles FROM role ", function (err, results) {
        console.table(results);
        if (err) throw err;
        determineAction()
    });
}