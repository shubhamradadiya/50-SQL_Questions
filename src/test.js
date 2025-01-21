const express = require("express");
const knex = require("../db/knex");
const router = express.Router();

router.get("/test", async (req, res) => {
  //?Q1 fetch “FIRST_NAME” from Worker table using the alias name as <WORKER_NAME>
  //   knex("Worker")
  //     .select("FIRST_NAME")
  //     .as("WORKER_NAME")
  //     .then((data) => {
  //       res.send(data);
  //     });
  //   //?Q2 fetch “FIRST_NAME” from Worker table in upper case
  //   knex
  //     .raw(`select UPPER(FIRST_NAME) as WORKER_NAME  from Worker `)
  //     .then((data) => {
  //       res.send(data[0]);
  //     });
  // //?Q3 fetch unique values of DEPARTMENT from Worker table
  //   knex("Worker")
  //     .select("DEPARTMENT")
  //     .groupBy("DEPARTMENT")
  //     .then((data) => res.send(data));
  //?Q4 print the first three characters of  FIRST_NAME from Worker table
  //   knex
  //     .raw(`select SUBSTRING(FIRST_NAME,1,3) as WORKER_NAME  from Worker `)
  //     .then((data) => {
  //       res.send(data[0]);
  //     });
  //?Q5 find the position of the alphabet (‘b’) in the first name column ‘Amitabh’ from Worker table.
  //   knex("Worker")
  //     .select(knex.raw("POSITION('b' IN FIRST_NAME )as 'position'"))
  //     .where("FIRST_NAME", "Amitabh")
  //     .then((data) => {
  //       res.send(data[0]);
  //     });
  //?Q6 FIRST_NAME from Worker table after removing white spaces from the right side.
  //   knex("Worker")
  //     .select(knex.raw("RTRIM(FIRST_NAME)"))
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q7 print the DEPARTMENT from Worker table after removing white spaces from the left side
  //   knex("Worker")
  //     .select(knex.raw("LTRIM(DEPARTMENT)"))
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q8 fetches the unique values of DEPARTMENT from Worker table and prints its length.
  //   knex("Worker")
  //     .select(knex.raw("LENGTH(DEPARTMENT)"))
  //     .groupBy("DEPARTMENT")
  //     .then((data) => res.send(data));
  //?Q9 FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.
  //   knex("Worker")
  //     .select(knex.raw("REPLACE(FIRST_NAME , 'a','A')"))
  //     .then((data) => res.send(data));
  //?Q10 FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME.
  //   knex("Worker")
  //     .select(knex.raw("CONCAT(FIRST_NAME,' ' ,LAST_NAME)as COMPLETE_NAME"))
  //     .then((data) => res.send(data));
  //?Q11 print all Worker details from the Worker table order by FIRST_NAME Ascending.
  //   knex("Worker")
  //     .orderBy("FIRST_NAME")
  //     .then((data) => res.send(data));
  //?Q12 FIRST_NAME Ascending and DEPARTMENT Descending.
  //   knex("Worker")
  //     .orderBy([
  //       { column: "FIRST_NAME" },
  //       { column: "DEPARTMENT", order: "desc" },
  //     ])
  //     .debug(true)
  //     .then((data) => res.send(data));
  //?Q13 print details for Workers with the first name as “Vipul” and “Satish” from Worker table.
  //   knex("Worker")
  //     .where("FIRST_NAME", "=", "Vipul")
  //     .orWhere("FIRST_NAME", "=", "Satish")
  //     .debug(true)
  //     .then((data) => res.send(data));
  //?Q14 excluding first name as “Vipul” and “Satish” from Worker table.
  //   knex("Worker")
  //     .where("FIRST_NAME", "!=", "Vipul")
  //     .andWhere("FIRST_NAME", "!=", "Satish")
  //     .debug(true)
  //     .then((data) => res.send(data));
  //?Q15 details of Workers with DEPARTMENT name as “Admin*”.
  //   knex("Worker")
  //     .where("DEPARTMENT", "=", "Admin")
  //     .debug(true)
  //     .then((data) => res.send(data));
  //?Q-16. details of the Workers whose FIRST_NAME contains ‘a’.
  //   knex("Worker")
  //     .whereRaw("FIRST_NAME like '%a%' ")
  //     .then((data) => res.send(data));
  //?Q-17 FIRST_NAME ends with ‘a’.
  //   knex("Worker")
  //     .whereRaw("FIRST_NAME like '%a' ")
  //     .then((data) => res.send(data));
  //?Q-18. Workers whose FIRST_NAME ends with ‘h’ and contains six alphabets.
  //   knex("Worker")
  //     .whereRaw("FIRST_NAME like '%a' ")
  //     .andWhere(knex.raw("LENGTH(FIRST_NAME) > 6"))
  //     .then((data) => res.send(data));
  //?Q-19 Workers whose SALARY lies between 100000 and 500000.
  //   knex("Worker")
  //     .whereBetween("SALARY", [100000, 500000])
  //     .then((data) => res.send(data));
  //?: Q-20. Workers who have joined in Feb’2014.
  //   knex("Worker")
  //     .whereRaw("MONTH(JOINING_DATE) = 2")
  //     .then((data) => res.send(data));
  //? Q-21. count of employees working in the department ‘Admin’.
  //   knex("Worker")
  //     .count("DEPARTMENT")
  //     .where("DEPARTMENT", "=", "Admin")
  //     .debug(true)
  //     .then((data) => res.send(data));
  //?Q-22. worker full names with salaries >= 50000 and <= 100000.
  //   knex("Worker")
  //     .select(
  //       knex.raw("CONCAT(FIRST_NAME,' ' ,LAST_NAME)as COMPLETE_NAME"),
  //       "SALARY"
  //     )
  //     .andWhere(knex.raw("SALARY >= 50000 AND SALARY <= 100000"))
  //     .then((data) => res.send(data));
  //?Q-23.the no. of workers for each department in the descending order.
  //   knex
  //     .from("Worker")
  //     .count("DEPARTMENT")
  //     .as("DEPARTMENT_COUNT")
  //     .groupBy("department")
  //     .orderBy(knex.count("DEPARTMENT"), "desc")
  //     .then((data) => res.send(data));
  //?Q-24 print details of the Workers who are also Managers.
  //   knex("Worker")
  //     .leftJoin("Title", "Worker.WORKER_ID", "Title.WORKER_REF_ID")
  //     .where(`Title.WORKER_TITLE`, "Manager")
  //     .then((data) => res.send(data));
  //?Q-25 fetch number (more than 1) of same titles in the ORG of different types.
  //   knex("Title")
  //     .count("WORKER_TITLE")
  //     .groupBy("WORKER_TITLE")
  //     .then((data) => res.send(data));
  //? Q-26. show only odd rows from a table.
  //   knex
  //     .withRecursive("table", (qb) => {
  //       qb.select("*")
  //         .from("Worker")
  //         .where("Worker.WORKER_ID", 1)
  //         .union((qb) => {
  //           qb.select("*")
  //             .from("table")
  //             .where("table.WORKER_ID", n + 1);
  //         });
  //     })
  //     .select("*")
  //     .from("table")
  //     .then((data) => res.send(data));
  //?------
  //   knex("Worker")
  //     .whereRaw("MOD (WORKER_ID, 2) = 1 ")
  //     .then((data) => res.send(data));
  //?Q-27. Write an SQL query to show only even rows from a table.
  //   knex("Worker")
  //     .whereRaw("MOD (WORKER_ID, 2) = 0")
  //     .then((data) => res.send(data));
  //?Q-28. clone a new table from another table.
  // knex.schema.createTableLike("new_Worker", "Worker").then((data) => {
  //   console.log(data);
  //   res.send("table created");
  // });
  //?INSERT
  //   knex
  //   .raw(
  //     `INSERT INTO new_Worker
  //   (WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
  //       (00, 'Monika', 'Arora', 100000, '14-02-20 09.00.00', 'HR')
  // `
  //   )
  //   .then(() => {
  //     res.send("insert data successfully");
  //   });
  //?Q-29. Write an SQL query to fetch intersecting records of two tables.
  //   knex("Worker")
  //     .intersect(function () {
  //       this.from("new_Worker");
  //     })
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-30.show records from one table that another table does not have.-- MINUS
  //   knex("Worker")
  //     .except(function () {
  //       this.from("new_Worker");
  //     })
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-31 query to show the current date and time.-- DUAL
  //   knex.raw("SELECT CURRENT_TIME()").then((data) => {
  //     res.send(data[0]);
  //   });
  //?Q-32. show the top n (say 5) records of a table order by descending salary
  //   knex("Worker")
  //     .limit(5)
  //     .orderBy("SALARY", "desc")
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-33. determine the nth (say n=5) highest salary from a table.
  //   knex("Worker")
  //     .select("*")
  //     .denseRank("salary_rank", knex.raw("order by ?? desc", ["SALARY"]))
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-34. Write an SQL query to determine the 5th highest salary without using LIMIT keyword.
  //   knex
  //     .from(
  //       knex("Worker")
  //         .select("*")
  //         .denseRank("salary_rank", knex.raw("order by ?? desc", ["SALARY"]))
  //         .as("T1")
  //     )
  //     .select()
  //     .where("salary_rank", 5)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-35. Write an SQL query to fetch the list of employees with the same salary.
  //   knex("Worker")
  //     .select("*")
  //     .rowNumber("salary_rank", knex.raw("partition by SALARY "))
  //     .then((data) => {
  //       res.send(data);
  //     });
  //? Q-36.show the second highest salary from a table using sub-query.
  //   knex
  //     .from(
  //       knex("Worker")
  //         .select("*")
  //         .denseRank("salary_rank", knex.raw("order by ?? desc", ["SALARY"]))
  //         .as("T1")
  //     )
  //     .select()
  //     .where("salary_rank", 2)
  //     .then((data) => {
  //       res.send(data);
  //      })
  //?Q-37. show one row twice in results from a table.
  //   knex("Worker")
  //     .select("*")
  //     .unionAll(function () {
  //       this.select("*").from("Worker");
  //     })
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-38.  list worker_id who does not get bonus.
  //   knex("Worker")
  //     .whereNotExists(function () {
  //       this.from("Bonus").whereRaw("Worker.WORKER_ID = Bonus.WORKER_REF_ID ");
  //     })
  //     .then((data) => {
  //       res.send(data);
  //     });
  //todo Q-39.  fetch the first 50% records from a table.
  // knex
  //   .raw(
  //     `
  //     WITH RankedRecords AS (
  //         SELECT *, ROW_NUMBER() OVER (ORDER BY WORKER_ID) AS rnk
  //         FROM Worker
  //     )
  //     SELECT *
  //     FROM RankedRecords
  //     WHERE rnk <= (SELECT COUNT(*) / 2 FROM Worker);
  //   `
  //   )
  //   .then((data) => {
  //     res.send(data[0]);
  //   });
  //? Q-40. fetch the departments that have less than 4 people in it
  //   knex
  //     .from(
  //       knex.raw(
  //         "select `WORKER_ID`, count(`DEPARTMENT`) as `DC` from `Worker` group by `DEPARTMENT` as T1"
  //       )
  //     )
  //     .select("*")
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?----
  //   knex("Worker")
  //     .count("DEPARTMENT")
  //     .groupBy("DEPARTMENT")
  //     .then((data) => {
  //       res.send(data);
  //     });
  //? Q-41. show all departments along with the number of people in there.
  //   knex
  //     .with(
  //       "T1",
  //       knex.raw(
  //         `SELECT
  //         DEPARTMENT,
  //         COUNT(DEPARTMENT) OVER (
  //         PARTITION BY DEPARTMENT) AS TOTAL_EMP
  //         FROM Worker
  //    `
  //       )
  //     )
  //     .from("T1")
  //     .groupBy("DEPARTMENT")
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-42. Write an SQL query to show the last record from a table.
  //   knex
  //     .select("*")
  //     .from("Worker")
  //     .offset(7)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Optimize SOLUTION
  //   knex("Worker")
  //     .orderBy("WORKER_ID", "desc")
  //     .limit(1)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //? Q-43. Write an SQL query to fetch the first row of a table.
  //   knex("Worker")
  //     .limit(1)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-44. Write an SQL query to fetch the last five records from a table.
  //   knex("Worker")
  //     .orderBy("WORKER_ID", "desc")
  //     .limit(5)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-45.  print the name of employees having the highest salary in each department.
  //   knex("Worker")
  //     .select("*")
  //     .denseRank(
  //       "highest_salary_rank",
  //       { column: "SALARY", order: "desc" },
  //       "DEPARTMENT"
  //     )
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?-----
  //   knex
  //     .with(
  //       "T1",
  //       knex.raw(
  //         `SELECT
  //           DEPARTMENT,FIRST_NAME,
  //           MAX(SALARY) OVER (
  //           PARTITION BY DEPARTMENT) AS MAX_SALARY_DP
  //           FROM Worker
  //      `
  //       )
  //     )
  //     .from("T1")
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-46. Write an SQL query to fetch three max salaries from a table using co-related subquery
  //   knex("Worker")
  //     .orderBy("SALARY", "desc")
  //     .limit(3)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //? -- Q-47. Write an SQL query to fetch three min salaries from a table using co-related subquery
  //   knex("Worker")
  //     .orderBy("SALARY", "asc")
  //     .limit(3)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //? Q-48. Write an SQL query to fetch nth max salaries from a table.
  //? We are fetch n=5th
  //   knex
  //     .from(
  //       knex("Worker")
  //         .select("*")
  //         .denseRank("salary_rank", knex.raw("order by ?? desc", ["SALARY"]))
  //         .as("T1")
  //     )
  //     .select()
  //     .where("salary_rank", 5)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q49 Write an SQL query to fetch departments along with the total salaries paid for each of them.
  //   knex
  //     .with(
  //       "T1",
  //       knex.raw(
  //         `SELECT
  //           DEPARTMENT,
  //           SUM(SALARY) OVER (
  //           PARTITION BY DEPARTMENT) AS TOTAL_PAID
  //           FROM Worker
  //      `
  //       )
  //     )
  //     .from("T1")
  //     .distinct("*")
  //     .then((data) => {
  //       res.send(data);
  //     });
  //?Q-50. Write an SQL query to fetch the names of workers who earn the highest salary.
  //   knex("Worker")
  //     .orderBy("SALARY", "desc")
  //     .limit(3)
  //     .then((data) => {
  //       res.send(data);
  //     });
  //? SELF: Name High_Salary By department
  //   knex
  //     .with(
  //       "T1",
  //       knex.raw(
  //         `SELECT DISTINCT
  //             DEPARTMENT,
  //             MAX(SALARY) OVER (
  //             PARTITION BY DEPARTMENT) AS HIGHEST_SALARY
  //             FROM Worker
  //        `
  //       )
  //     )
  //     .from("T1")
  //     .join("Worker", "Worker.SALARY", "T1.HIGHEST_SALARY")
  //     .then((data) => {
  //       res.send(data);
  //     });
});

module.exports = router;
