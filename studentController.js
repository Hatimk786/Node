
const Student=require("./Student");

exports.index=(req,res) => {
    Student.findAll()
     .then((students) => {
         console.log("all students retrived successfully:", students);
         res.send({message:"all students retrived successfully", data:students});
    })
     .catch((error)=>{
         console.error("Error in retriving students " ,error);
         res.send({message:"error in retriving students", error: error});
    });

};
exports.show = (req, res) => {
  Student.findByPk(req.params.id)
   .then((studentab) => {
        console.log("Student retrieved successfully:", studentab);
        res.send({ message: "Student retrieved successfully", data: studentab });
   })
   .catch((error)=>{
         console.error("Error in retriving students " ,error);
         res.send({message:"error in creating student", error: error});
   }
)}

exports.store=(req,res) => {
   Student.create(req.body)
     .then((newStudent) => {
        console.log("student created successfully:",newStudent);
        res.send({message:"student created successfully", data: newStudent});
    })
     .catch((error)=>{
        console.error("Error in creating student " ,error);
        res.send({message:"error in creating student", error: error});
    });
};

exports.update=(req,res) => {
    Student.update(req.body,{ where: {id: req.params.id} })
     .then(()=>{
        console.log("student updated successfully:");
        res.send({message:"student updated successfully",data: req.body}); 
    })
    .catch((error)=>{
        console.error("Error in updating student ", error);
        res.send({message:"error in updating student", error: error});
    });
};

exports.delete=(req,res)=>{
    Student.destroy({ where: { id:req.params.id} })
     .then(()=>{
        console.log("student deleted successfully:");
        res.send({message:"student deleted successfully"}); 
    })
        .catch((error)=>{
        console.error("Error in updating student ", error);
    });
}