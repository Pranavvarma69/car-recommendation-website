import mongoose from 'mongoose';

const carSchema= new mongoose.Schema({
    brand:{type:String,required:true},
    model:{type:String,required:true},
    price:Number,
    carType:{type:String,enum:['SUV', 'Sedan', 'Hatchback','Coupe','Truck']},
    fuelType:{type:String,enum:['Petrol', 'Diesel', 'Electric','Hybrid']},
    image:String,
    description:String,

});

export default mongoose.model('Car',carSchema);