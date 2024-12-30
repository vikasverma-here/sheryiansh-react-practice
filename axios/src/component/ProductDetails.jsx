import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData as fetchData } from '../services/GetServices';

const ProductDetails = () => {
    const [ndata, setNdata] = useState(null); // Use null to indicate initial state
    const { id } = useParams();

    const fetchSingleData = async () => {
        try {
            const res = await fetchData();
            const product = res.data.find((item) => item.id === parseInt(id)); // Match the id (convert to number)
            setNdata(product); // Set the specific product
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        fetchSingleData();
    }, [id]);

    if (!ndata) {
        return <h2>Loading...</h2>; // Show loading state if data isn't available yet
    }

    return (
        <div>
            <h1>Product Details</h1>
            <img src={ndata.image} alt={ndata.title} style={{ width: "200px" }} />
            <h2>Title: {ndata.title}</h2>
            <h3>Category: {ndata.category}</h3>
            <h3>Price: ${ndata.price}</h3>
            <p>Description: {ndata.description}</p>
        </div>
    );
};

export default ProductDetails;
