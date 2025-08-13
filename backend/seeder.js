// seeder.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import cars from "./data/cars.js";
import Car from "./models/car.js"; // adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const importData = async () => {
  try {
    await Car.deleteMany(); // Clear old data
    await Car.insertMany(cars); // Insert new data
    console.log("Sample cars inserted!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();