// import app from "./src/app";
// import { config } from "./src/config/config";
// import connectDB from "./src/config/db";

// const startServer = async () => {
//   // Connect database
//   await connectDB();

//   const port = config.port || 3000;

//   app.listen(port, () => {
//     console.log(`Listening on port: ${port}`);
//   });
// };

// startServer();

import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
