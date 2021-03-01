//Depedencies
const mysql = require('mysql');
const inquirer = require('inquirer');
//MYSQL Connection
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Greedy10",
    database: "employeedatabase"
  });

//Connections Error / Success Logging  
db.connect(function(err) {
    if (err) { console.error("ERROR connecting");
      return;
    }
    console.log("connected");
    loopQuestions();
  });
//Main Menu List Options
function loopQuestions() {
inquirer.prompt({

        name: "action",
        type: "list",
        message: "Select an option: ",
        choices: [

          "View Departments",
          "View Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Exit"]

      })
// Initiate Switch Loop
.then(function (answer) {
    switch (answer.action) {
        case "View Departments":
        viewDep();
        break;
        case "View Roles":
        viewRoles();
        break;
        case "View All Employees":
        viewEmployees();
        break;
        case "Add Department":
        addDep();
        break;
        case "Add Role":
        addRole();
        break;
        case "Add Employee":
        addEmployee();
        break;
        case "Update Employee Role":
        updateEmployeeRole();
        break;
        case "Exit":
        db.end();
        break;
    }
    });
}
// View All Departments SQL Query 
function viewDep() {
const query = 
    
    "SELECT * FROM department";

    db.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
   
    loopQuestions();
    });
  }
// View All Roles SQL Query 
function viewRoles() {
    const query = 
    
        "SELECT * FROM role";
    
        db.query(query, function (err, res) {
          if (err) throw err;
          console.table(res);
       
        loopQuestions();
        });
      }
      // View All Employees SQL Query 
function viewEmployees() {
const query = 
        
        "SELECT employee_id, employee.first_name, employee.last_name, role.role_title, " +
        "department.name FROM employee " +
        "LEFT JOIN role on employee.role_id = role.role_id " +
        "LEFT JOIN department on role.department_id = department.department_id";
    
        db.query(query, function (err, res) {
          if (err) throw err;
          console.table(res);
          console.log("");
          loopQuestions();
        });
      }