const sequalize = require("sequelize");
const db = require("./db");

const Student=db.define("student",{
    id:{
        type:sequalize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequalize.STRING,
        allowNull:false,
    },
    city:{
        type:sequalize.STRING,
        allowNull:false,
    },
    email:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
    });

    db.sync()
    .then(() => {
        console.log("Student table created successfully");
    })
    .catch((err)=>{
        console.error("unable to creating table ", err);
    });

    module.exports=Student;
