INSERT INTO 
employeedatabase.department (department_id, name)
VALUES 
(1, "Writer");

INSERT INTO 
employeedatabase.department (department_id, name)
VALUES 
(2, "Stunt Double");

INSERT INTO 
employeedatabase.department (department_id, name)
VALUES 
(3, "Awards Judge");

INSERT INTO 
employeedatabase.department (department_id, name)
VALUES 
(4, "Comedian");



INSERT INTO 
employeedatabase.role (role_id, role_title, role_salary, department_id, manager)
VALUES 
(1, "Lead Actor", 400000, 4, 1);

INSERT INTO 
employeedatabase.role (role_id, role_title, role_salary, department_id, manager)
VALUES 
(2, "Supporting Actor", 170000, 4, 0);

INSERT INTO 
employeedatabase.role (role_id, role_title, role_salary, department_id, manager)
VALUES 
(3, "Super Hero Actor", 1000000, 1, 1);

INSERT INTO 
employeedatabase.role (role_id, role_title, role_salary, department_id, manager)
VALUES 
(4, "Comedy Actor", 7500000, 1, 0;

INSERT INTO 
employeedatabase.role (role_id, role_title, role_salary, department_id, manager)
VALUES 
(7, "Drama Actor", 280000, 2, 0;

INSERT INTO 
employeedatabase.role (role_id, role_title, role_salary, department_id, manager)
VALUES 
(8, "Method Actor", 960000, 3, 1);

INSERT INTO 
employeedatabase.role (role_id, role_title, role_salary, department_id, manager)
VALUES 
(9, "Award Winning Actor", 2465000, 3, 0);


INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(1, "Will", "Smith", 7, 4);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(2, "Nicolas", "Cage", 1, Null);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(3, "Seth", "Rogan", 3, Null);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(4, "Daniel", "Craig", 4, Null);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(5, "Bryan", "Cranston", 3, 7);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(6, "Robert", "DiNero", 2, 2);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(7, "Paul", "Rudd", 4, Null);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(8, "Jason", "Segal", 2, 7);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(9, "Lady", "Gaga", 1, 7);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(10, "Bradley", "Cooper", 2, 2);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(11, "Ed", "Helm", 2, 3);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(12, "Luiz", "Guzman", 3, 4);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(13, "William", "Macy", 4, 7);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(14, "Tim", "Allen", 3, 7);

INSERT INTO 
employeedatabase.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES 
(15, "Aaron", "Paul", 1, 3);