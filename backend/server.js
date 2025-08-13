import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv' 
import carRoutes from './routes/carRoutes.js';

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/cars',carRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MangoDB connected')).catch(error=>console.log(error));

app.get('/',(req,res)=>res.send('API is running....'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));