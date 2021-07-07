const express=require("express");
const app=express();
const connectDB=require('./config/connectDB');

//4- parse data
app.use(express.json())

//3- routes
app.use('/api/persons',require("./routes/person"))
//2- connect DB
connectDB()
//1- run server
const port=process.env.PORT||7600; 
app.listen(port, (err)=> {
    err?console.log('error :',err) : console.log('The server is running');
})