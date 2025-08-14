import { useState } from "react";
import CarList from '../components/carList';

export default function Home() {
    const [brand, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '40px auto',
            padding: '0 20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#333',
        },
        filterBar: {
            display: 'flex',
            gap: '15px',
            marginBottom: '30px',
            flexWrap: 'wrap',
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        },
        input: {
            padding: '10px 15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            transition: 'all 0.3s ease',
        },
        inputFocus: {
            borderColor: '#007bff',
            boxShadow: '0 0 5px rgba(0,123,255,0.5)',
            outline: 'none',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.filterBar}>
                <select
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    style={styles.input}
                >
                    <option value=''>All Brands</option>
                    <option value='Toyota'>Toyota</option>
                    <option value='BMW'>BMW</option>
                    <option value='Tesla'>Tesla</option>
                </select>

                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    style={styles.input}
                />
            </div>

            <CarList selectedBrand={brand} minPrice={minPrice} maxPrice={maxPrice} />
        </div>
    );
}