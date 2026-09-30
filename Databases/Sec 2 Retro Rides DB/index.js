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
  const tableDataPath = path.join(__dirname, 'populate-tables.sql')
  const alterPath = path.join(__dirname, 'alter-table.sql')
  const newDataPath = path.join(__dirname, 'insert-new-data.sql')

  // Set up the DB files
  const createTables = fs.readFileSync(createPath, 'utf8');
  const insertCarsData = fs.readFileSync(carsDataPath, 'utf8');
  const tableData = fs.readFileSync(tableDataPath, 'utf8')
  const alterData = fs.readFileSync(alterPath, 'utf8')
  const newTableData = fs.readFileSync(newDataPath, 'utf8');

  await db.exec(createTables);
  await db.exec(insertCarsData);

  // Run the changes made in DM section
  const crudOperations = fs.readFileSync(crudPath, 'utf8');
  await db.exec(crudOperations);

  //adding and altering tables
  await db.exec(tableData)
  await db.exec(alterData)
  await db.exec(newTableData)

  // Load the SQL query file
  const query = fs.readFileSync(queryPath, 'utf8');


  // Run the query from the query file
  const response = await db.query(query);

  console.clear();
  console.table(response.rows);
})();
