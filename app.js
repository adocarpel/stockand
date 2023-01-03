const express = require ('express')
const app = express()
require('dotenv').config()
app.get('/',(req,res)=>{
    console.log(`App rreessppplistening o`)
    res.send("hol nnddoo");
})  

const port = process.env.PORT||4000;
app.listen(port,()=>{

    
    console.log(`App listening on ${port}`);

})