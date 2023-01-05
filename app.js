const express = require ('express')
const app = express()
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL)
.then((result)=>console.log('conexión exitosa'))
.catch((err)=>console.log(err))
app.use(express.static(path.join(__dirname,'public')));
/*
app.get('/',(req,res)=>{
    console.log(`App rreessppplistening o`)
    //res.send("hol nnddoo");
    res.status(200).sendFile("index.html",{root:__dirname});
})  
*/
const productSchema=mongoose.Schema(
    {
        name:{type: String, required: true},
        price:Number
    }
    ,
    {timestamps:true}
)

const Product = mongoose.model('Product',productSchema)

app.use(express.json())
app.post('/api/v1/products', (req,res)=>{
    ///console.log(`Petición recibida`)
    //res.send("hol nnddoo");
    //201 recurso creado
    ///console.log({body:req.body})
    /*
    const newProduct = new Product({
        name:req.body.name,
        price:req.body.price
    })
    */
    const newProduct = new Product(req.body)
    newProduct
        .save()
        .then((result)=>{
            res.status(201).json({ok:true})
        })
        .catch((err)=>console.log(err))
    ///res.status(201).json({ok:true})
})  

const port = process.env.PORT||4000;
app.listen(port,()=>{

    
    console.log(`App listening on ${port}`);

})