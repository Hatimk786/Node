const express = require("express");
const sequalize = require("sequelize");

const studentRoute=require("./studentRoute");
const app = express();
const PORT=3000;
app.use(express.json());

app.use("/Student", studentRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
});