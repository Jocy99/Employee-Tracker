INSERT INTO department(name)
VALUES ("Management"),
("HR"),
("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("software developer", 100000, 3),
    ("team manager", 80000, 1),
    ("receptionist", 65000, 2),
    ("office manager", 75000, 1),
    ("administrative assistant", 80000, 2),
    ("data entry clerk", 80000, 3);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Kevin", "Tortolini", 1),
    ("Joe", "Shmoe", 3),
    ("Cameron", "Verner", 4),
    ("Antonios", "Zikos", 3),
    ("Fay", "Lopez", 2),
    ("Angel", "Reyes", 5);
