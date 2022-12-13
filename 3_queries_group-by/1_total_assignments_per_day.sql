SELECT assignments.day AS day, count(assignments.day) AS total_assignments
FROM assignments
GROUP BY day
HAVING count(assignments.day) >= 10
ORDER BY day;