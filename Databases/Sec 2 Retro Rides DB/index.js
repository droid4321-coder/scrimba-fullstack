import { PGlite } from '@electric-sql/pglite';
import fs from 'fs';
import path from "node:path"

(async () => {
  const db = new PGlite();

  //routes and path
  const __dirname = import.meta.dirname;
  const createPath = path.join(__dirname, 'create-tables.sql')
  const carsDataPath = path.join(__dirname, 'insert-cars-data.sql')
  const crudPath = path.join(__dirname, 'crud-operations.sql')
  const queryPath = path.join(__dirname, 'query.sql')

  // Set up the DB files
  const createTables = fs.readFileSync(createPath, 'utf8');
  const insertCarsData = fs.readFileSync(carsDataPath, 'utf8');
  await db.exec(createTables);
  await db.exec(insertCarsData);

  // Run the changes made in DM section
  const crudOperations = fs.readFileSync(crudPath, 'utf8');
  await db.exec(crudOperations);

  // Load the SQL query file
  const query = fs.readFileSync(queryPath, 'utf8');


  // Run the query from the query file
  const response = await db.query(query);

  console.clear();
  console.table(response.rows);
})();
