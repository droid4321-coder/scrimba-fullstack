-- SELECT * FROM cars; -> selects everything

-- SELECT brand, model, price FROM cars; -> selects only wanted columns

--Challenge lesson 4
-- SELECT brand, model, condition, year FROM cars;

--SELECT brand, model, color, price FROM cars WHERE color = 'black'; -> WHERE clause to filter based on black color

--Challenge lesson 5
-- SELECT brand, model, condition, price FROM cars WHERE condition = 0;

-- SELECT brand, model, condition, price FROM cars WHERE condition > 3; this selects elements that have a condition more than 3

--Lesson 6 1st challenge
--SELECT brand, model, condition, price FROM cars WHERE price < 50000

--Lesson 7 Challenge 1
--SELECT brand, model, year, price FROM cars WHERE year <> 1965; can also use != or <> Cars that are not from 1965

--Lesson 7 Challenge 2
-- SELECT brand, model, color, year, price FROM cars WHERE color <> 'yellow'; Cars that color is not yellow

--Lesson 8 Exercise
-- SELECT brand, model, color, year FROM cars WHERE color LIKE '%green%'; cars that include green include color before or after with the wildcards

--SELECT brand, model, color, year FROM cars WHERE color NOT LIKE '%green%'; cars that are NOT green

--Lesson 8 Challenge
--SELECT brand, model, year, color, price FROM cars WHERE model LIKE 'DB_' Cars that model start with DB and any letter

--lesson 9 exercise
--SELECT brand, model, color, year FROM cars WHERE color NOT LIKE '%green%' AND model LIKE 'DB_' AND year > 1964; cars that Are model DB smth and not green color and after 1964

--Lesson 9 Challenge
--SELECT brand, model, year, condition, price FROM cars WHERE condition >= 3 AND year < 1970 AND price <= 100000;

--Lesson 10 exercise
--SELECT brand, model, year, price FROM cars WHERE year BETWEEN 1980 AND 1989; crs from the 80s, can also be written WHERE year >= 1980 AND year <= 1989

--Lesson 10 Challenge
--SELECT brand, model, condition, color, price FROM cars WHERE price BETWEEN 20000 AND 60000 AND condition BETWEEN 1 AND 3 AND color LIKE '%red%';

--L11 E
-- SELECT brand, model, condition, price FROM cars WHERE price <= 250000 OR brand LIKE 'Porsche'; Cars that are less than $250,000 OR the brand is Porsche

--SELECT brand, model, condition, price FROM cars WHERE (price <= 250000 OR brand = 'Porsche') AND condition > 3; Cars that meet one of the OR conditions And meet the other condition

--L11 C
--SELECT brand, model, year, color FROM cars WHERE (color LIKE '%red%' OR year BETWEEN 1960 AND 1969) AND sold IS FALSE; cars from the 60s or red and are not sold . The IS FALSE statement is used for booleans and is good to avoid edge cases

--L12 E
--SELECT brand, model, price, sold FROM cars WHERE brand IN ('Ford', 'Chevrolet', 'Ferrari') AND sold IS FALSE; cars from 3 brands in the brand column that have not been sold

--L12 E2
--SELECT brand, model, condition, year FROM cars WHERE year IN (1961, 1963, 1965, 1967, 1969) AND condition >= 3 AND sold IS FALSE; cars from odd years in the 60s that are in good condition and are not sold

--L12 C
--SELECT brand, model, year, price FROM cars WHERE (brand NOT IN ('Ford', 'Chevrolet', 'Dodge', 'Triumph') OR price <= 50000) AND sold IS FALSE; cars not from America that or less than $50,000 and are not sold.

--L13 C1 - something red but not Ferrari, and available
--SELECT brand, model, year, price FROM cars WHERE color LIKE '%red%' AND NOT brand = 'Ferrari' AND sold IS FALSE

--L13 C2 - exclude red, blue, and white cars, and no Aston Martin, Bentley or Jaguar
--SELECT brand, model, year, color, price, sold FROM cars WHERE NOT color IN ('red', 'blue', 'white') AND NOT brand IN ('Aston Martin', 'Bentley', 'Jaguar') AND sold IS FALSE; That is long lol!

--L13 C3 - dodge from 60s or Ford or Triumph from the 70s
--SELECT brand, model, year, color, price, sold FROM cars WHERE ((brand = 'Dodge' AND year BETWEEN 1960 AND 1969) OR (brand IN ('Ford', 'Triumph') AND year BETWEEN 1970 AND 1979)) AND sold IS FALSE; holy toledo!

--L14 E
--SELECT brand, model, year FROM cars ORDER BY brand DESC, year; it orders the brand from A-Z default is alphabetical for strings and ascending for numbers. To reverse the order we use DESC. And we can sort by USING SORT BY. If we put multiple values in the ORDER BY, we it will start with the first one, then sort by the other column, etc.

--L14 C - sort by condition desc and by price asc, also check if cars are not sold
-- SELECT brand, model, condition, price FROM cars WHERE sold IS FALSE AND condition <> 5 ORDER BY condition DESC, price ASC;

--L15 E most expensive car in stock
--SELECT brand, model, year, price FROM cars ORDER BY price DESC LIMIT 1;

--L15 C 5 cheapest red cars
--SELECT brand, model, year, price, color FROM cars WHERE color LIKE '%red%' AND sold IS FALSE ORDER BY price ASC LIMIT 5;

--L16 E Check sold cars count - 24 rows
--SELECT COUNT(*) AS total_sold FROM cars WHERE sold is TRUE; we can also use aliases to change some names of columns

--L16 E2 Price of sold cars - $1,205,000
--SELECT SUM(price) AS total_earnings FROM cars WHERE sold IS TRUE;

--L17 E1 - most expensive car sold - $195,000
--SELECT MAX(price) AS most_expensive FROM cars WHERE sold IS TRUE; important we cannot add other columns because we are aggregating by a column, and we are selecting a column and reducing a single value

--L17 C1 - Avg price of a Bentley - $62,500
--SELECT AVG(price) AS avg_bentley_price FROM cars WHERE brand = 'Bentley'; We have trailing decimals we can get rid of them by doing FLOOR(AVG(price)), we can also USE CEIL.

--L17 C2 - Avg, min and max prices of all sold cars
--SELECT CEIL(AVG(price)) AS avg, MIN(price) as min_sold_price, MAX(price) AS max_sold_price FROM cars WHERE sold IS TRUE;



/*
    Lesson 3: SELECT all
    the CEO wants the stock of all the cars
    for that we do SELECT *(this means all) FROM cars;

    Lesson 4: selecting columns
    We want brand, model and price
    SELECT (columns wanted separated with commas) FROM cars;

    Generally in SQL we write in all caps, but it is not a requirement. Its a convention

    Lesson 5: WHERE
    We want cars that the color is black for the customer
    SELECT brand, model, color, price FROM cars
    WHERE color = 'black' VERY important single quotes only!

    Lesson 6: Complex conditions
    Complex conditions can filter more records and create more specific searches
    Numerical filtering we can use <, >, and <>
    SELECT brand, model, condition, price FROM cars WHERE condition > 3;

    Lesson 7: not equal 
    Check if item is not equal to a certain condition using symbols like != and <>

    Lesson 8: NOT and LIKE
    This conditions looks for partial matched
    There are wildcards we can use to do partial matches,
    % = any number of any character
    _ = one of any character
    example if we do '%green%' it will match results like light green, greenish-yellow, dark green, so on.
    example '_-Type' matches X-Type, S-Type, and E-Type
    SELECT brand, model, color, year FROM cars WHERE color LIKE '%green%';

    Lesson 9: AND
    The AND operator allows us to add two or more conditions to a query

    Lesson 10: BETWEEN
    This conditions allows us to specify between 2 parameters

    L11: OR
    The operator allows us to combine conditions and find records that meet 1 of the conditions given
    In OR conditions, we cant put AND operator in any of one conditions. If we want 2 conditions to have an AND, we need to add brackets to the OR conditions to put them separate of the AND condition

    L12: IN operator
    Look for multiple values in a column we can use the IN operator

    L13: Challenges 1

    L14: ORDER BY
    Order and aggregates - now we will see how to order the output
    Order by allows us to sort the content by a selected column

    L15: LIMIT
    The limit keyword limits the number of records shown on the query
    
    L16: COUNT and SUM
    These are aggregations and return one value. We use aggregates by defining them and then in parentheses specifiying the column we want to analyze. Count returns the number of records(rows) that match certain criteria, and sum return the total amount of certain column numbers

    L17: MAX, MIN, AVG:
    MAX returns the maximum value, MIN the minimum, and AVG the average of a set of values
*/