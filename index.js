const { query } = require("express");
const inquirer = require("inquirer");
const mysql = require('mysql');
require('console.table');


const menuList =  {    

    viewDeparments: "View all departments",
    viewRoles: "View all roles",
    viewEmployees: "View all employees",
    addDep: "Add a department",
    addRole: "Add a role",
    addEmployee: "Add an employee",
    updateEmployee: "Update an employee role",
    quit: "Quit"

};

const db = mysql.createConnection({

    host: "localhost",

    user: "yourusername",

    password: "yourpassword"

  });

    db.connect(function(err) {
    if (err) throw err;
    console.log("MySql Connected!");
  });

function prompt(){inquirer.prompt({
    
    type: 'list',
    name: 'menu',
    message: 'Select your desired function: '
    choices: [
        menuList.viewDepartments,
        menuList.viewRoles,
        menuList.viewEmployees,
        menuList.addDep,
        menuList.addRole,
        menuList.addEmployee,
        menuList.updateEmployee,
        menuList.quit]
    })

.then(response => {
    switch (response.nextAction) {
        case menuList.viewDepartments:
            viewDepartments();
            break;
        case menuList.addRole:
            viewRoles();
            break;
        case menuList.viewEmployees:
            viewEmployees();
            break;
        case menuList.addDep:
            addDep();
            break;
        case menuList.addRole:
            addRole();
            break;
        case menuList.addEmployee:
            addEmployee();
            break;
        case menuList.updateEmployee:
            updateEmployee();
            break;
        case 'Quit':
            connection.end();
            break;
            }
    
    ]);

    }
function viewDepartments() {
    const query = 'SELECT department.name AS department, role.title, employee.id, employee.first_name, employee.last_name
    FROM employee
    LEFT JOIN role ON (role.id = employee.role_id)
    LEFT JOIN department ON (department.id = role.department_id)
    ORDER BY department;';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.log('View All Departments');
        console.table(res);
        prompt();
    });
}

function viewRoles() {
    const query = 'SELECT role.title, emploee.id, employee.first_name, employee.last_name, department.name AS department
    FROM employee
    LEFT JOIN role ON (role.id = employee.role_id)
    LEFT JOIN department ON (department.id = role.department_id)
    ORDER BY role.title;';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.log(View all roles');
        prompt();
    });
}

function viewEmployees() {
    const query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.firstname, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN employee manager ON manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;';
    console.log('View employees: ');
    prompt();
});

}