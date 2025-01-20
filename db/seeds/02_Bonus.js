/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Bonus").del();
  await knex.raw(
    `INSERT INTO Bonus 
	(WORKER_REF_ID, BONUS_AMOUNT, BONUS_DATE) VALUES
		(1, 5000, '16-02-20'),
		(2, 3000, '16-06-11'),
		(3, 4000, '16-02-20'),
		(1, 4500, '16-02-20'),
		(2, 3500, '16-06-11');`
  );
};
