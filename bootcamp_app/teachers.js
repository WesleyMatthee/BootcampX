const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`];
const queryString = `SELECT DISTINCT(teachers.name) as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;
`;
// .then(res => {
//   res.rows.forEach(row => {
//     console.log(`${row.cohort}: ${row.teacher}`);
//   });
// });

pool.query(queryString, values);


//   pool.query(`
// SELECT DISTINCT(teachers.name) as teacher, cohorts.name as cohort
// FROM assistance_requests
// JOIN teachers ON assistance_requests.teacher_id = teachers.id
// JOIN students ON assistance_requests.student_id = students.id
// JOIN cohorts ON students.cohort_id = cohorts.id
// WHERE cohorts.name LIKE '%${process.argv[2] || 'JUL02'}%'
// ORDER BY teachers.name;
// `)
//   .then(res => {
//     res.rows.forEach(row => {
//       console.log(`${row.cohort}: ${row.teacher}`);
//     });
//   });