// routes/carRoutes.js
import express from 'express';
import Car from '../models/car.js';

const router = express.Router();

/**
 * DEBUG ROUTE — Get all cars without filters
 */
router.get('/test', async (req, res) => {
    try {
        const cars = await Car.find({});
        console.log('Cars from DB (test route):', cars);
        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars (test route):', err);
        res.status(500).json({ message: err.message });
    }
});

/**
 * GET /api/cars
 * Optional query params:
 * brand, carType, fuelType, minPrice, maxPrice
 */
router.get('/', async (req, res) => {
    console.log('GET /api/cars called');
    console.log('Query parameters:', req.query);

    try {
        const { brand, minPrice, maxPrice, carType, fuelType } = req.query;
        let filter = {};

        // Filter by brand
        if (brand) {
            filter.brand = { $regex: new RegExp(`^${brand}$`, 'i') };
        }

        // Filter by car type
        if (carType) {
            filter.carType = { $regex: new RegExp(`^${carType}$`, 'i') };
        }

        // Filter by fuel type
        if (fuelType) {
            filter.fuelType = { $regex: new RegExp(`^${fuelType}$`, 'i') };
        }

        // Filter by price range
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        console.log('MongoDB filter:', filter);

        const cars = await Car.find(filter);

        console.log(`Found ${cars.length} cars`);
        res.status(200).json(cars);

    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ message: 'Server error fetching cars', error: error.message });
    }
});

/**
 * POST /api/cars
 * Add a new car
 */
router.post('/', async (req, res) => {
    console.log('POST /api/cars called');
    console.log('Request body:', req.body);

    try {
        const newCar = new Car(req.body);
        const savedCar = await newCar.save();
        console.log('Car saved:', savedCar);
        res.status(201).json(savedCar);
    } catch (error) {
        console.error('Error saving car:', error);
        res.status(400).json({ message: 'Error saving car', error: error.message });
    }
});

export default router;