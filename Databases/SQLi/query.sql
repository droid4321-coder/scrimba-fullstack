/*
  Select the brand, model and price from cars

  In our WHERE clause, we'll match against a placeholder value: The one in userinput on index.js
*/

/* Selecting the brand model and price FROM cars and the brand is the one we specified on userInput

Now, with parameterization, instead of passing the <<brand>>, we now pass $1 to pass the 1st parameter to the query
*/

SELECT brand, model, price FROM cars WHERE brand = $1;