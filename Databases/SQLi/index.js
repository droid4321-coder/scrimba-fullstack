import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';
import path from "node:path"


/* L25 Sqli Example

  The admin has optimized the DB such that the userInput can enter the userInput and execute the query.

  Demo purposes only.

  When we put a brand like Ford, all the cars that return Ford are put, but this is susceptible to SQL injection

  We are passing a quoted string, and SQLi allows us to put an exploited string that bypasses the query. Like `´Ford´ OR 1=1`, since 1 = 1 is true, every query statement will be returned as if we did SELECT * FROM table. This can expose us to leak sensitive data.

  One of the things that can protect us from SQLi is parameterization, when building queries, instead of putting replace on our query, we will pass a parameter in the response variable, passing a set of parameters, this will change on the query.sql. This no longer exposes us to SQLi, we can pass user input still. The safe response shows up.

  Preventing injections. We can do that by using parameterised queries, using ORMs, validating and sanitizing inputs, limiting database prvileges, and using web application firewalls to catch the injected queries. (WAF)

  Using parameterised queries, queries can be prepared to avoid directly sending user input to the database. With parameterisation, our queries are treated as 2 separate threads, SQL and data, the parameters are not interpreted as SQL and the SQL is parsed with placeholder values.

  Using ORMs, ORMs allows us to translate data into objects before passing the data into the database, this can help prevent SQL injections by adding a layer of translation between our inputs and the database. 

  Validating and sanitise inputs, inputs can be interpreted before being sent to the database. We can check for malicious input at this stage. Unexpected characters ban be checked for and rejected, whitelists can be configured to allow valid inputs. 

  using WAFs, can be used to identify and block common SQL injection patterns. Services like AWS WAF, Cloudflare, or ModSecurity offer these services as part of their platform. 
*/


 const userInput = `Ford`;

(async () => {
  const db = new PGlite();

  //path setup variables
  const __dirname = import.meta.dirname
  const sqlPath = path.join(__dirname, 'query.sql')
  const dbSetupPath = path.join(__dirname, 'database-setup.sql')
  const seedPath = path.join(__dirname, 'seed-data.sql')

  // Set up the database
  const databaseSetup = fs.readFileSync(dbSetupPath, 'utf8');
  const seedData = fs.readFileSync(seedPath, 'utf8');
  await db.exec(databaseSetup);
  await db.exec(seedData);

  // Load the SQL query file
  let query = fs.readFileSync(sqlPath, 'utf8');

  // Replace placeholder with user input
  //query = query.replace('<<BRAND>>', userInput);


  // Run the query from the query file
  const response = await db.query(query, [userInput]);

  console.clear();
  console.table(response.rows);
})();
