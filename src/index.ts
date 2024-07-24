// src/index.ts
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3000;

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

const addition = (a: number, b: number): number => {
  return a + b;
};

const number1: number = 5;
const number2: number = 10;
const result: number = addition(number1, number2);

console.log(`The application name is "${process.env.APP_NAME}"`);

console.log('The result is %d', result);
