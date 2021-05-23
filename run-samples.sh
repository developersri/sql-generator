echo $'Case 1: Generating query to demonstrate:\n  Projections - retrieval of all projections (columns)\n  Sources - single source\n  Filters - no filters spcified\n\nResult:' &&
node main.js --data inputs/input1.json &&

echo $'\n\nCase 2: Generating query to demonstrate:\n  Projections - specified columns with table and alias name\n  Sources - single source with specified alias\n  Filters - simple binary operation\n\nResult:' &&
node main.js --data inputs/input2.json &&

echo $'\n\nCase 3: Generating query to demonstrate:\n  Projections - specified columns without table and alias name\n  Sources - single source without specified alias\n  Filters - unary (+), binary (ilike, >=, =) and \'IN\' (literal list, subquery) operations lined up using logical operators (AND, OR)\n\nResult:' &&
node main.js --data inputs/input3.json &&

echo $'\n\nCase 4: Generating query to demonstrate:\n  Projections - specified columns with table and alias name\n  Sources - multiple table sources separated by comma(,) implying cross join\n  Filters - simple binary operation\n\nResult:' &&
node main.js --data inputs/input4.json &&

echo $'\n\nCase 5: Generating query to demonstrate:\n  Projections - specified columns with tables and alias name\n  Sources - multiple table sources with specified join type and join clause\n  Filters - simple binary operation\n\nResult:' &&
node main.js --data inputs/input5.json &&

echo $'\n\nCase 6: Generating query to demonstrate:\n  Projections - specified columns with tables and alias name\n  Sources - multiple sources (table, subquery) with specified join type and join clause\n  Filters - simple binary operation\n\nResult:' &&
node main.js --data inputs/input6.json &&

echo $'\n\nDone'