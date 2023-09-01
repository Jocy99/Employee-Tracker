const mysql = require("mysql2");
const inquirer = require("inquirer");
// const db = require('./db');
// const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "pizza99",
    database: "inventory_db",
  },
  console.log(`we have a connection!!!`)
);

// Function to start the application
async function startApp() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    },
  ]);

  switch (action) {
    case "View all departments":
      viewDept();
      break;
    case "View all roles":
      viewRole();
      break;
    case "View all employees":
      viewEmployee();
      break;
    case "Add a department":
      addDept();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee role":
      updateEmployeeRole();
      break;
    case "Exit":
      console.log("Goodbye!");
      process.exit();
  }
}

// Start the application
startApp();

const viewDept = () => {
  db.query("select * from department", (err, results) => {
    if (err) {
      console.error(err);
    }
    console.table(results);
    startApp();
  });
};

const viewRole = () => {
  db.query("select * from role", (err, results) => {
    if (err) {
      console.error(err);
    }
    console.table(results);
    startApp();
  });
};

const viewEmployee = () => {
  db.query("select * from employee", (err, results) => {
    if (err) {
      console.error(err);
    }
    console.table(results);
    startApp();
  });
};

const addDept = () => {
  inquirer
    .prompt({
      type: "input",
      name: "dept",
      message: "What is the name of the department?",
    })
    .then(function (answer) {
      // here we add db.query
      db.query(
        "insert into department (name) values (?)",
        [answer.dept],
        (err, result) => {
          if (err) {
            console.error(err);
          }
          console.table(result);
          startApp();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role",
        message: "What is the title of the role you would like to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of this role?",
      },
      {
        type: "input",
        name: "departmentId",
        message: "What is the department ID for this new role?",
      },
    ])
    .then(function (answer) {
      db.query(
        "insert into role (title, salary, department_id) value (?, ?, ?)",
        [answer.role, answer.salary, answer.departmentId],
        (err, result) => {
          if (err) {
            console.error(err);
          }
          console.log(result);
          startApp();
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "What is the first name of the new employee?",
      },
      {
        type: "input",
        name: "lastname",
        message: "What is the last name of the new employee?",
      },
      {
        type: "input",
        name: "roleId",
        message: "What is the role ID for this employee?",
      },
    ])
    .then(function (answer) {
      db.query(
        "insert into employee (first_name, last_name, role_id) value (?,?,?)",
        [answer.firstname, answer.lastname, answer.roleId],
        (err, result) => {
          if (err) {
            console.error(err);
          }
          console.log(result);
          startApp();
        }
      );
    });
};

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleId",
        message: "What is the new role ID fo rthis employee?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the employee ID?",
      },
    ])
    .then(function (answer) {
      db.query(
        "update employee set role_id = ? where id = ?",
        [answer.roleId, answer.employeeId],
        (err, result) => {
          if (err) {
            console.error(err);
          }
          console.table(result);
          startApp();
        }
      );
    });
};
