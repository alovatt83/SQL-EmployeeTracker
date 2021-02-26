const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const render = require("./lib/sqlRenderer");

const emptyArray = [];

        const menu =  [     

        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit"]
        },
    ]

        const addDep = [

        {
            type: "input",
            name: "addDep",
            message: "Enter the name of the new department: "
        },
    ]
        
        const addRole = [
        
        {
            type: "input",
            name: "roleName",
            message: "Enter the name of the new role: ",
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary of the new role: "
        },
        {
            type: "list",
            name: "addRoleDep",
            message: "Select Department for new role: ",
            choices: [

            ]
        },
    ]
        
        const addEmployee = [

        {
            type: "input",
            name: "firstName",
            message: "Enter new employees first name: "
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter new employees last name: "
        },
        {
            type: "input",
            name: "newEmpRole",
            message: "Enter mew employees role: "
        },
        {
            type: "list",
            name: "newEmpManager",
            message: "Select new employees manager: "
        },
    ]   
        const updateEmployee = [

        {
            type: "list",
            name: "currentEmp",
            message: "Which employee would you like to update?: ",
            choices: []
        },
        {
            type: "input",
            name: "updateEmpRole",
            message: "Enter employees new role: "
        },
    


// Initiate questions.
function init() {

    // Start inquirer with manager questions.
    menu();

    function next() {
        inquirer.prompt(menu).then((response) => {
            
            console.log(response);
            switch (response.nextEmployee) {
                case 'View all departments':
                    menu();
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
                case 'Exit':
                    console.log('Exiting System')
                    exit();
            }
        })
    }
    const viewEmployeesByManager = async () => {
        const choices = await employeeDB_CRUD.getManagers();
        console.log(choices);
        return new Promise( (resolve, reject) => {
            inquirer.prompt([
                {
                    name: "manager",
                    type: "list",
                    message: "Please select a department: ",
                    choices: choices
                }
            ]).then( ({ manager }) => {
                console.log(manager);
                resolve();
            });
        });
    }
        function viewEmployees() {
            inquirer.prompt(managerInput).then((response) => {
        
                let name = response.managerName;
                let id = response.managerID;
                let email = response.managerEmail;
                let officePhone = response.officePhone;
                // Generate Object for 'Manager' inquirer input.
                const manager = new Manager(name, id, email, officePhone);
                // Direct input to empty array.
                emptyArray.push(manager);
                
                console.log(emptyArray);
                // Move user to select 'nextEmployee'
                next();
            })
        }
    function menu() {
        inquirer.prompt(managerInput).then((response) => {
    
            let name = response.managerName;
            let id = response.managerID;
            let email = response.managerEmail;
            let officePhone = response.officePhone;
            // Generate Object for 'Manager' inquirer input.
            const manager = new Manager(name, id, email, officePhone);
            // Direct input to empty array.
            emptyArray.push(manager);
            
            console.log(emptyArray);
            // Move user to select 'nextEmployee'
            next();
            })
        }
    //  Function for calling the 'Engineer' questions.
    function addRole() {
        inquirer.prompt(engineerInput).then((response) => {
    
            let name = response. engName;
            let id = response.engID;
            let email = response.engEmail;
            let github = response.engGithub;
            // Generate Object for 'Engineer'' inquirer input.        
            const engineer = new Engineer (name, id, email, github);
    
            emptyArray.push(engineer);
            console.log(emptyArray);
            // Move user to select 'nextEmployee'
            next();
            })
        }
    
    // Function for calling the 'Intern' questions.
    function addEmployee() {
        inquirer.prompt(internInput).then((response) => {
    
            let name = response. internName;
            let id = response.internID;
            let email = response.internEmail;
            let internSchool = response.internSchool;
            // Generate Object for 'Intern' inquirer input.        
            const intern = new Intern (name, id, email, internSchool);
    
            emptyArray.push(intern);
            console.log(emptyArray);
            // Move user to select 'nextEmployee'        
            next();
            })
        }

    function updateEmployee() {
        inquirer.prompt(internInput).then((response) => {
    
            let name = response. internName;
            let id = response.internID;
            let email = response.internEmail;
            let internSchool = response.internSchool;
            // Generate Object for 'Intern' inquirer input.        
            const intern = new Intern (name, id, email, internSchool);
    
            emptyArray.push(intern);
            console.log(emptyArray);
            // Move user to select 'nextEmployee'        
            next();
            })
        }

    
    
