-- L1
--SELECT id, brand, model FROM cars ORDER BY id;

--L3
--SELECT * FROM sold_cars;

--L4 Checking data
--SELECT * FROM staff;

--L5
--SELECT id, dealership_id, brand, model FROM cars

--L7
/*
	Select the brand, model, price, sold, sold_price columns
		from sold_cars
	Left join with cars
		matching sold_cars.cars_id to cars.id
*/

--select the columns from the sold cars table and left join cars on the sold cars, cars id. Aliasing soldcars to SC and cars to C, and after ON we are looking for equality

--SELECT brand, model, price, sold, sold_price FROM sold_cars SC LEFT JOIN cars C ON SC.cars_id = C.id;

-- right join -> SELECT brand, model, price, sold, sold_price FROM sold_cars SC RIGHT JOIN cars C ON C.id = SC.cars_id

--challenge 1 - link dealership id column in staff by referencing an id from dealerships. Each member of staff is assigned to a dealership, but not all dealerships have hired staff. list staff and where they work

-- SELECT name, role, city, state FROM staff S LEFT JOIN dealerships D ON S.dealership_id = D.id;

-- SELECT name, role, city, state FROM staff S RIGHT JOIN dealerships D ON S.dealership_id = D.id;

--L8
--SELECT * FROM staff;

--Full Join here
/*
	Select name, role from staff and city, state from dealerships
	Join the staff table to dealerships using full join
		match the staff.dealership_id to dealerships.id
*/

--SELECT name, role, city, state FROM staff FULL JOIN dealerships ON dealership_id = dealerships.id;

/*
	Select name, role from staff and city, state from dealerships
	Use INNER JOIN to show only staff who have been assigned to a dealership
		and dealerships with staff
*/

-- SELECT name, role, city, state FROM staff INNER JOIN dealerships ON dealership_id = dealerships.id;

--SELECT * FROM sold_cars and SELECT * FROM staff;

--Viewing all the staff members and sold cars

--w/inner join SELECT name, role, sold_price from staff S INNER JOIN sold_cars SC ON seller = S.id;

--SELECT name, role, sold_price from staff S FULL JOIN sold_cars SC ON seller = S.id;

/*
	Select the city and average car price
	Round that car price to a whole number

    only 3 dealerships have cars...
	
	Only show dealerships which have cars
	
	Group by dealership city and state
*/

-- SELECT city, state, ROUND(AVG(C.price), 2) FROM dealerships D INNER JOIN cars C ON D.id = C.dealership_id GROUP BY city, state;

-- Official solution -> SELECT city, state, ROUND(AVG(price), 2) AS avg_price FROM cars LEFT JOIN dealerships D ON dealership_id = D.id GROUP BY city, state;

/*
	Select the name and role, alongside a total_sales:
		this is the sum of sales by a member of staff
	
	Use staff as your left table and sold_cars as your right table
	
	Include a where clause to select only staff with the role 'Salesperson'
	
	Group by staff name and role
	Order by the total_sales from high to low
*/

--SELECT name, role, SUM(SC.sold_price) AS total_sales FROM staff S FULL JOIN sold_cars SC ON S.id = SC.seller WHERE role = 'Salesperson' GROUP BY name, role ORDER BY total_sales DESC;

/*
	Select the city, state and
		count the total number of cars in each dealership
		alias the count as car_count
	
	Use cars as the left table, and dealerships as the right table
		choosing a join which will show every dealership
		
	Include a condition to count unsold cars
	
	Group by dealership city and state
	Order by the car_count
*/

--SELECT city, state, COUNT(C.id) AS car_count FROM dealerships D LEFT JOIN cars C ON D.id = C.dealership_id AND C.sold = false GROUP BY city, state ORDER BY car_count DESC;

--Official solution - SELECT city, state, COUNT(C.id) AS car_countFROM cars C RIGHT JOIN dealerships D ON dealership_id = D.id WHERE sold IS NOT TRUE GROUP BY city, state ORDER BY car_count;

--L10

/*
	List:
		- the brand and model of cars
		- include the name of the seller,
		- the city they work in
		- the date of the sale
	
	Format the sold_date as DD-MM-YYYY using TO_CHAR()
	
	Use sold_cars as the left table and join other tables
		show sold_cars when we have no record of the seller
*/

--bro what is this???

/* SELECT 
    C.brand,
    C.model,
    S.name as seller_name,
    D.city,
    TO_CHAR(SC.sold_date, 'DD-MM-YYYY') as date_of_sale
FROM sold_cars SC
    INNER JOIN cars C on SC.cars_id = C.id
    LEFT JOIN staff S ON SC.seller = S.id
    LEFT JOIN dealerships D ON S.dealership_id = D.id;
*/

/*
	Select the name, role and city from sold_cars
	
	Join with the staff and dealerships tables
		use appropriate joins to show staff who have no dealership_id
		
	Include a where clause to find
		- null values in sold_cars
		- staff who have the role 'Salesperson'
*/

/* SELECT
    S.name,
    S.role,
    D.city
FROM staff S
    LEFT JOIN sold_cars SC ON S.id = SC.seller
    LEFT JOIN dealerships D ON S.dealership_id = D.id
WHERE
    SC.id IS NULL AND S.role = 'Salesperson';
*/

/* Official - SELECT
	S.name,
	S.role,
	D.city
FROM sold_cars SC
	FULL JOIN staff S ON SC.seller = S.id
	LEFT JOIN dealerships D ON S.dealership_id = D.id
WHERE SC.id IS NULL
	AND S.role = 'Salesperson'; */

/*
	Show the city and state of dealerships
		with a count of the cars sold
		aliased as cars_sold
		
	Select from sold_cars
		join with the relevant tables
		
	Include dealerships which have no sold cars
	
	Order the count in descending order
		
	Hint: you may need to join using a table not included in our columns
*/

-- SELECT
--     D.city,
--     D.state,
--     COUNT(SC.id) as cars_sold
-- FROM sold_cars SC
--     LEFT JOIN cars C ON SC.cars_id = C.id
--     --RIGHT JOIN staff S ON SC.seller = S.id
--     RIGHT JOIN dealerships D ON C.dealership_id = D.id
-- GROUP BY D.city, D.state
-- ORDER BY cars_sold DESC;

/* Official Solution
SELECT
	D.city,
	D.state,
	COUNT(SC.id) AS cars_sold
FROM sold_cars SC
	LEFT JOIN cars C ON SC.cars_id = C.id
	RIGHT JOIN dealerships D ON C.dealership_id = D.id
GROUP BY D.city, D.state
ORDER BY cars_sold DESC;
*/

----------- SECTION 3 -----------

--L2
/*
	Select the brand, model and price from cars
		where the price is greater than the sold price
			of any car that was sold by Frankie Fender
		and the car has not been sold
*/

-- SELECT brand, model, price FROM cars
--   WHERE price > ANY (
--     SELECT SC.sold_price FROM sold_cars SC
--       JOIN staff S ON SC.seller = S.id
--       WHERE S.name = 'Frankie Fender'
--   ) AND sold IS FALSE;

/*
	Select the brand, model and price where
		* the price is lower than any Ford
		* the brand is Volkswagen
*/

-- SELECT brand, model, price from cars
-- WHERE price < ANY (
--     SELECT price from cars WHERE brand = 'Ford'
-- ) AND brand = 'Volkswagen';

/*
	Select the name, and sold price
		from the staff table, joined with sold_cars
		on matches between staff(id) and sold_cars(seller)
	Where the seller has sold a car for a price greater than
		any sum of a salesperson's total sales
*/

-- SELECT S.name, sold_price FROM sold_cars SC
-- JOIN staff S ON S.id = SC.seller
-- WHERE sold_price > ANY (
--     SELECT SUM(sold_price) FROM sold_cars
--     GROUP BY seller
-- );

-- Official - SELECT S.name, SC.sold_price
--   FROM staff S
--   JOIN sold_cars SC ON S.id = SC.seller
-- WHERE SC.sold_price > ANY (
-- SELECT SUM(sold_price) FROM sold_cars
--   GROUP BY seller
-- );

/*
	Select the brand, model and price from cars
	Where the price of the car is greater
		than the total sales of any dealership
*/

-- SELECT brand, model, price FROM cars
-- WHERE price > ANY (
--     SELECT SUM(sold_price) FROM sold_cars SC
--     JOIN staff S ON S.id = SC.seller
--     GROUP BY S.dealership_id
-- );

--L3
/*
	Select brand, model, condition and price from cars
		where the price is less than all cars which are in average condition (3)
*/

-- SELECT brand, model, condition, price
--   FROM cars
-- WHERE price < ALL (
--   SELECT price FROM cars
--     WHERE condition = 3
-- );

/*
	Select the brand, model and year from cars
	Where the year is before all cars with a brand of 'Ford'
	Order the results by year
*/

-- SELECT brand, model, year FROM cars
-- WHERE year < ALL (
--     SELECT year FROM cars WHERE brand = 'Ford'
-- ) ORDER BY year;

/*
	Select the brand, model, city, and price from cars
		joined with dealerships where cars(dealership_id) matches dealerships(id)
	where the price is greater than the price of all sold cars
	order the results by city
*/

-- SELECT brand, model, city, price from cars
-- JOIN dealerships ON cars.dealership_id = dealerships.id
-- WHERE price > ALL (
--     SELECT sold_price FROM sold_cars
-- ) ORDER BY city;

-- L4
/*
	Select colors of car where there has been a sale of that color car. When we select 1 from the table subquery, we want to know if there is one result thats true, then the exists clause is true. DISTINCT returns unique values. If we use NOT before exists, we get results that do not match the exists clause.
*/

-- SELECT DISTINCT color FROM cars
--   WHERE EXISTS (
--     SELECT 1 FROM sold_cars WHERE cars_id = cars.id
--   );

/*
	Select the city, state and date established of dealerships
		Where there are no existing cars in stock
		
	Format the date in 'YYYY-MM-DD' format using TO_CHAR()
		and alias it as 'est'
*/

-- SELECT city, state, TO_CHAR(established, 'YYYY-MM-DD') AS est FROM dealerships
-- WHERE NOT EXISTS (
--     SELECT 1 FROM cars WHERE cars.dealership_id = dealerships.id
-- );

/*
	Select the city and state of dealerships
	Where there exists a car priced at more than $50,000
	
	Hint: you'll need to match cars(dealership_id) with dealerships(id)
	and then check for car price in your subquery
*/

-- SELECT city, state FROM dealerships D
-- WHERE EXISTS (
--     SELECT 1 FROM cars C WHERE D.id = C.dealership_id AND price > 50000
-- );

/*
	Select the name of salespeople
		(role = 'Salesperson')
	who have not sold a car for more than $45,000
*/

-- select name from staff s
-- WHERE s.role = 'Salesperson' AND NOT EXISTS (
--     select 1 from sold_cars sc where sc.seller = s.id  AND sc.sold_price > 45000 
-- ) AND EXISTS (
-- SELECT 1 FROM sold_cars SC WHERE seller = s.id
--);

--L5