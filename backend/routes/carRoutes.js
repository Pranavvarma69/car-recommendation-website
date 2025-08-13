import express from 'express'
import Car from '../models/car.js'
const router=express.Router();

router.get('/',async(req,res)=>{
    try{
        const {brand,minprice,maxprice,type,fuel}=req.query;
        let filter={};
        if(brand) filter.brand=brand;
        if(type) filter.type=type;
        if(fuel) filter.fuel=fuel;
        if(minprice||maxprice){
            filter.price={};
            if(minprice) filter.price.$gte=Number(minprice);
            if(maxprice) filter.price.$lte=Number(maxprice);
        }
        const cars= await Car.find(filter).populate('brand');
        res.json(cars);
    }catch (error){
        res.status(500).json({message:error.message})
    }
    

});

router.post('/',async(req,res)=>{
    try{
        const newCar=new Car(req.body);
        const savedCar=await newCar.save();
        res.status(201).json(savedCar);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

export default router;