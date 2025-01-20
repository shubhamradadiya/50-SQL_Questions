/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // INSERT INTO Worker
  // (WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
  // 	(001, 'Monika', 'Arora', 100000, '14-02-20 09.00.00', 'HR'),
  // 	(002, 'Niharika', 'Verma', 80000, '14-06-11 09.00.00', 'Admin'),
  // 	(003, 'Vishal', 'Singhal', 300000, '14-02-20 09.00.00', 'HR'),
  // 	(004, 'Amitabh', 'Singh', 500000, '14-02-20 09.00.00', 'Admin'),
  // 	(005, 'Vivek', 'Bhati', 500000, '14-06-11 09.00.00', 'Admin'),
  // 	(006, 'Vipul', 'Diwan', 200000, '14-06-11 09.00.00', 'Account'),
  // 	(007, 'Satish', 'Kumar', 75000, '14-01-20 09.00.00', 'Account'),
  // 	(008, 'Geetika', 'Chauhan', 90000, '14-04-11 09.00.00', 'Admin');
  await knex("worker").del();
  await knex("worker").insert([
    {
      WORKER_ID: 1,
      FIRST_NAME: "Monika",
      LAST_NAME: "Arora",
      SALARY: 100000,
      JOINING_DATE: "14-02-20 09.00.00",
      DEPARTMENT: "HR",
    },
    {
      WORKER_ID: 2,
      FIRST_NAME: "Niharika",
      LAST_NAME: "Verma",
      SALARY: 80000,
      JOINING_DATE: "14-06-11 09.00.00",
      DEPARTMENT: "HR",
    },
    {
      WORKER_ID: 3,
      FIRST_NAME: "Vishal",
      LAST_NAME: "Singhal",
      SALARY: 300000,
      JOINING_DATE: "14-02-20 09.00.00",
      DEPARTMENT: "HR",
    },
    {
      WORKER_ID: 4,
      FIRST_NAME: "Amitabh",
      LAST_NAME: "Singh",
      SALARY: 500000,
      JOINING_DATE: "14-02-20 09.00.00",
      DEPARTMENT: "HR",
    },
    {
      WORKER_ID: 5,
      FIRST_NAME: "Vivek",
      LAST_NAME: "Bhati",
      SALARY: 500000,
      JOINING_DATE: "14-06-11 09.00.00",
      DEPARTMENT: "HR",
    },
    {
      WORKER_ID: 6,
      FIRST_NAME: "Vipul",
      LAST_NAME: "Diwan",
      SALARY: 200000,
      JOINING_DATE: "14-06-11 09.00.00",
      DEPARTMENT: "HR",
    },
    {
      WORKER_ID: 7,
      FIRST_NAME: "Satish",
      LAST_NAME: "Kumar",
      SALARY: 75000,
      JOINING_DATE: "14-01-20 09.00.00",
      DEPARTMENT: "HR",
    },
    {
      WORKER_ID: 8,
      FIRST_NAME: "Geetika",
      LAST_NAME: "Chauhan",
      SALARY: 90000,
      JOINING_DATE: "14-04-11 09.00.00",
      DEPARTMENT: "HR",
    },
  ]);
};
