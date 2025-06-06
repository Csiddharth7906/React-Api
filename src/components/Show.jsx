import React, { useEffect, useState } from 'react'        // Importing React and the useState hook
import axios from "./Axos";                     // Importing Axios for making HTTP requests

const Show = () => {
    // Initialize a state variable 'products' to store the list of products
    const [products, setProducts] = useState([]);

    // Function to fetch product data from the API
    const getproducts = () => {
        const api = "/products"; // API endpoint

        // Axios GET request to fetch data
        axios.get("/products")
            .then(response => {
                // On success, update 'products' state with the data from API
                setProducts(response.data);
            })
            .catch(error => {
                // Log any errors that occur during the request
                console.error(error);
            });
    }
    useEffect(()=>{
        // Fetch product data on component mount
        getproducts();
    },[])

    return (
        <div>
            

            <hr className='my-10'/> {/* Horizontal line for separation */}

            {/* List to display products */}
            <ul className='pt-5  mx-auto'>
              {
                // If products exist, map through them and render each item
                products.length > 0 
                ? products.map(p => {
                    return (
                      <li 
                        key={p.id} // Always include a unique 'key' when mapping lists
                        className='p-5 mb-2 rounded bg-red-300'
                      >
                        {/* Display product title, price, category, description and image */}
                        {p.title} - {p.price} - {p.category} - {p.description}
                        <br />
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          width='100' 
                          height='100' 
                        />
                      </li>
                    );
                  })
                : 'Loading....' // Message shown if product list is empty
              }

              {/* You can add more formatting or fields here as needed */}
            </ul>
        </div>
    )
}

export default Show; // Export the component so it can be used in other parts of the app
