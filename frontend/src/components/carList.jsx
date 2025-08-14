import { useEffect,useState } from "react";
import axios from 'axios';

export default function CarList({ selectedBrand, minPrice, maxPrice }) {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchCars = async () => {
        try {
          setLoading(true);
  
          // Build query parameters for filtering
          const params = {};
          if (selectedBrand) params.brand = selectedBrand;
          if (minPrice) params.minPrice = minPrice;
          if (maxPrice) params.maxPrice = maxPrice;
  
          const res = await axios.get('http://localhost:5001/api/cars', { params });
          setCars(res.data);
        } catch (err) {
          console.error('Error fetching cars:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCars();
    }, [selectedBrand, minPrice, maxPrice]);
  
    if (loading) return <p>Loading cars...</p>;
  
    if (cars.length === 0) return <p>No cars found matching your filters.</p>;

    return(
        <div className='grid grid-cols-3 gap-4'>
            {cars.map(car=>(
                <div key={car._id} className="p-4 border rounded"> 
                   <img src={car.image} alt={car.name} className="w-full h-48 object-cover"/>
                   <h2>{car.brand}</h2>
                   <h2>{car.model}</h2>
                   <p className="text-gray-600">${car.price.toLocaleString()}</p>
                </div>
            ))}
        </div>
    )

}