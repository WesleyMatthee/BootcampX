SELECT teachers.name AS teacher, cohorts.name AS cohort, count(*) AS total_assistances
FROM teachers
LEFT JOIN assistance_requests ON teachers.id = teacher_id
LEFT JOIN students ON students.id = student_id
LEFT JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teacher; 