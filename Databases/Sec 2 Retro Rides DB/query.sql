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