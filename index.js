import express from "express";
import connetionMongoDb from "./connection.js";
import apiRouter from "./routes/user.js";
import htmlRouter from "./routes/html.js";

const app = express();
connetionMongoDb("mongodb://localhost:27017/mydb");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/todo", apiRouter);
app.use("/", htmlRouter);

app.listen(3000, () => console.log("server started listening"));

//1. Importing libraries to set up the server and database.
//2.  Configuring Express to handle data and show web pages.
//3.  Defining the schema for storing to-do items in the database.
//4.  Handling routes so users can view the homepage and submit new to-dos.
//5. Connecting to MongoDB to save the to-do items.
//6.  Starting the server so it can listen for requests on port 3000.
