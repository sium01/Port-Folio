const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");


//dotenv configuartion
dotenv.config();

//rest object
const app=express();

//midewares
app.use(cors());
app.use(express.json());


//routes
app.use('/api/v1/portfolio',require('./routes/route'))

//port
const PORT=process.env.PORT 

//listen
app.listen(PORT,()=>{
 console.log(`server running on PORT${PORT}`);
});
