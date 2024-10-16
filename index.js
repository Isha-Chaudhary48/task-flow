import express from "express";
import mongoose from "mongoose";
import { Router } from "express";

//configuring express
const app = express();
app.use(express.json())//middleware to interpret json

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine","ejs")

//configuring mongodb
const TodoSchema = new mongoose.Schema({
    toDo :
    {
        type : String,
        required : true,
    },
});

 const Todo = new mongoose.model("Todo",TodoSchema)

 app.post('/submit',async(req,res)=>
{
    try{
        const{toDo}=req.body;
        const userInput = new Todo({ toDo});
        await userInput.save();
        res.status(201).send('data saved successfully');

    }
    catch(error)
    {
        res.status(500).send('error saving data');
    }
})

 

 //created a router to handle routes instead of directly using apps
 const router = Router();


router.get('/', (req,res) =>
{
    res.render("index")
})
app.use(router)




//turning on the server
mongoose.connect('mongodb://localhost:27017/mydb')
.then(() => {
    console.log('connected to mongDB');
})
.catch((err) =>{
    console.error('connection failed ', err)
})

app.listen(3000,()=> console.log("server started listening"))
