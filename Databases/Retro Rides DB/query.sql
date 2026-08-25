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
*/