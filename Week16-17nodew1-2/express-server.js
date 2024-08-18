import express from "express";
import helloRouter from "./routers.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/add/:num1/:num2", (req, res) => {
//   const num1 = parseFloat(req.params.num1);
//   const num2 = parseFloat(req.params.num2);

//   if (isNaN(num1) || isNaN(num2)) {
//     return res.status(400).send("Invalid numbers");
//   }
//   res.send(`The sum is ${num1 + num2}`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get("/:number", (req, res) => {
//   res.writeHead(200, Headers);
//   let i = 0;
//   const number = parseInt(req.params.number);
//   const intervalId = setInterval(() => {
//     res.write(i.toString() + "\n"); // Write current value of i to the response
//     i++;

//     // Stop the interval when i exceeds the requested number
//     if (i > number) {
//       clearInterval(intervalId);
//       res.end(); // End the response
//     }
//   }, 1000);
// });

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
  // res.send("bye");
});

app.use("/helloo", helloRouter);

// rewrite the adding page with query instead params
// /add?num1=10&num2=15
// app.get("/add", (req, res) => {
//   const num1 = parseFloat(req.query.num1);
//   const num2 = parseFloat(req.query.num2);

//   if (isNaN(num1) || isNaN(num2)) {
//     return res.status(400).send("Invalid numbers");
//   }
//   res.send(`The sum is ${num1 + num2}`);
// });

// any numbers of num:
// /add?num1=10&num2=15&num3=3
// app.get("/add", (req, res) => {
//   const sum = Object.values(req.query).reduce(
//     (sum, num) => sum + parseInt(num),
//     0
//   );
//   res.send(`The sum is ${sum}`);
// });

// give a key many values in query
// /add?num=10&num=15&num=3
app.get("/add", (req, res) => {
  const sum = Object.values(req.query.num).reduce(
    (sum, num) => sum + parseInt(num),
    0
  );
  console.log(req.query);
  res.send(`The sum is ${sum}`);
});
