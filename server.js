const express = require('express');
const mongoose = require('mongoose');
const BrandName = require('./model');


const app = express();

app.use(express.json())

mongoose.connect('mongodb+srv://charangoli7:Goli1234@cluster0.6qfseom.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log('DB connected...')
).catch(err => console.log(err))


app.post('/addbrand',async (req,res)=> {
    const {brandname} = req.body ;
    try{
       const newData = new BrandName({brandname});
       await newData.save();
       return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})
app.get('/getallbrands',async (req,res) => {
    try {
        const allData = await BrandName.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }

})
app.get('/getallbrands/:id',async (req,res) => {
    try{
        const Data = await BrandName.findById(req.params.id)
        return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }
})
app.delete('/deletebrand/:id',async (req,res) => {
    try{
        await BrandName.findByIdAndDelete({_id:req.params.id});
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})
app.put('/updatebrand/:id',async (req, res) => {
    BrandName.findByIdAndUpdate(req.params.id, req.body)  //params means parameter value
        .then(() => res.json('BrandName updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));

})

app.listen(3000,()=>console.log('server running...'))    