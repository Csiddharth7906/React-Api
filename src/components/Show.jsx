import React, { useState } from 'react'
import axios from 'axios';

const Show = () => {
    const [products, setProducts] = useState([]);
  const getproducts = ()=>{
    const api ="https://fakestoreapi.com/products";
    axios.get(api).then(products =>{
      
      setProducts(products.data);
    }).catch(error => console.error(error));
  }
  return (
    <div>
         <button onClick={getproducts } className='px-3 py-1 bg-blue-300 rounded'>call Product API</button>
          <hr className='my-10'/>
        <ul>
        {products.length > 0 ? products.map(p=>{
         return <li className=' p-5  mb-2 rounded bg-red-300'>
          {p.title} -{p.price} - {p.category}  -{ p.description  } - <img src={p.image} alt={p.title} width='100' height='100' />
         </li>
        }) : 'No products found'}
        
        
        {/* Add more list items as per your API response */}

      </ul>
    </div>
  )
}

export default Show