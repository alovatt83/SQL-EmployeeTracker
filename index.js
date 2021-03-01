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
      
// Add Department SQL Query 
function addDep() {
    inquirer.prompt({
  
      name: "department",
      type: "input",
      message: "Enter New Department Name: "
    })
  
  .then(function (answer) {
      db.query("INSERT INTO department SET ?", { name: answer.department }, function (err) {
      if (err) throw err;
      console.log(`${answer.department} department updated! \n`);
      loopQuestions();
  
      });
  });
  }

//Add Role SQL Query 
function addRole() {
    let array = [];
    const query = 
      
      "SELECT department_id as value, name as name FROM department";
    
      db.query(query, function (err, res) {
        if (err) throw err;
        array = JSON.parse(JSON.stringify(res));
        const questions = [
          {
    
            type: "input",
            name: "name",
            message: "Enter the name of the new role: "
    
          },
          {
    
            type: "input",
            name: "salary",
            message: "Enter the salary for this new role: ",
    
          },
          {
    
            type: "list",
            name: "department",
            message: "Select the department of the new role: ",
            choices: array
    
          },
          {
    
            type: "confirm",
            name: "manager",
            message: "Does a manager apply to this role? ",
            default: false
    
          }];
    
        inquirer.prompt(questions).then(answer => {
            db.query("INSERT INTO role (role_title, role_salary, department_id, manager) VALUES (?, ?, ?, ?)",
            [answer.name, answer.salary, answer.department, answer.manager], function (err, res)
            
            {
              if (err) throw err;
              if (res.affectedRows > 0) {
                console.log(res.affectedRows + " record added!");
              }
              console.log("");
              loopQuestions();
    
            });
        });
      });
    }
    
    // Add Employee SQL Query 
function addEmployee() {
    inquirer.prompt([
      {
  
        type: "input",
        name: "first_name",
        message: "Enter employees first name: "
  
      },
      {
  
        type: "input",
        name: "last_name",
        message: "Enter employees last name: "
  
      }
    ]).then(function (answer) {
  const query = "SELECT role_id as value, role_title as name FROM role WHERE manager = 0";
  db.query(query, function (err, res) {

      if (err) throw err;

      let array = JSON.parse(JSON.stringify(res));
      inquirer.prompt(
  
          {
          name: "role",
          type: "list",
          message: "Which role applies to this new employee",
          choices: array
  
          }).then(function (answer1) {
          var query = 
              
          "SELECT employee.employee_id as value, CONCAT(employee.first_name, ' ', employee.last_name) as name " +
          "FROM employee INNER JOIN role ON employee.role_id = role.role_id WHERE role.manager = 1";
  
          db.query(query, function (err, res) {
              if (err) throw err;

              let array2 = JSON.parse(JSON.stringify(res));
              inquirer.prompt({
  
              name: "manager",
              type: "list",
              message: "Select a manager for the new employee",
              choices: array2
  
              }).then(function (answer2) {
                  db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ( ?, ?, ?, ?)",
                  [answer.first_name, answer.last_name, answer1.role, answer2.manager], function (err, res) {
  
                  if (err) throw err;
                  
                  if (res.affectedRows > 0) {
                      console.log(res.affectedRows + " record added!");
                  }
  
                      console.log("");
                      loopQuestions();
                      });
                  });
              });
            });
      });
    });
  }
  

  