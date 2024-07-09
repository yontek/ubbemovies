const express = require ("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose") ;
const authRoute = require("./routes/Auth")
const userRoute = require("./routes/Users")
const movieRoute = require("./routes/Movie")
const listRoute = require("./routes/List")
const cors = require("cors")



dotenv.config();


const app = express();



const connect = () => {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Connectd to DB"))
      .catch((err) => console.log(err)); 
  };


app.use(express.json())
app.use(cors())
  
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/movies",movieRoute)
app.use("/api/list",listRoute)


app.listen(8800,()=>{

    connect()
   console.log("app is running on 8800") 
})