const express = require ('express')
const app = express()
app.get('/',(req,res)=>{
    console.log(`App rreessppplistening o`)
    res.send("hol nnddoo");
})  

const port = process.env.PORT||4000;
app.listen(4000,()=>{

    
    console.log(`App listening on ${port}`);

})