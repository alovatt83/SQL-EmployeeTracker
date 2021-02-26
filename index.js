const inquirer = require("inquirer");
const mysql = require('mysql');
const express = require("express");
const Connection = require("mysql2/typings/mysql/lib/Connection");
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

function prompt([inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: 'Select your desired function'
            choices: [
                menuList.viewDepartments,
                menuList.viewRoles,
                menuList.viewEmployees,
                menuList.addDep,
                menuList.addRole,
                menuList.addEmployee,
                menuList.updateEmployee,
                menuList.quit
            ]
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
                    Connection.end();
                    console.log('Exiting System')
                    break;
            }
    
    ]);

    }
    
  const app = express();

  // Create DB

app.get("/createdb", (req, res) => {

    let sql = "CREATE DATABASE nodemysql";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Database created");
  
    });
  
  });
  
  "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

  db.query(sql, (err) => {

    if (err) {

      throw err;

    }

    res.send("Employee table created");

  });


app.get("/employee1", (req, res) => {

    let post = { name: "Jake Smith", designation: "Chief Executive Officer" };
  
    let sql = "INSERT INTO employee SET ?";
  
    let query = db.query(sql, post, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Employee 1 added");
  
    });
  
  });

  // Update employee

app.get("/updateemployee/:id", (req, res) => {

    let newName = "Updated name";
  
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
  
    let query = db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Post updated...");
  
    });
  
  });

  // Delete employee

app.get("/deleteemployee/:id", (req, res) => {

    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
  
    let query = db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Employee deleted");
  
    });
  
  });

  app.listen("3001", () => {

    console.log("API Server Started on Port 3001");
  
  });

// Initiate questions.
function init() {

    // Start inquirer with manager questions.
    menu();


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
        init();