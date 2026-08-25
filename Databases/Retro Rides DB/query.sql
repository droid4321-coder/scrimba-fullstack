-- SELECT * FROM cars; -> selects everything

-- SELECT brand, model, price FROM cars; -> selects only wanted columns

--Challenge lesson 4
-- SELECT brand, model, condition, year FROM cars;

--SELECT brand, model, color, price FROM cars WHERE color = 'black'; -> WHERE clause to filter based on black color

--Challenge lesson 5
-- SELECT brand, model, condition, price FROM cars WHERE condition = 0;







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
*/