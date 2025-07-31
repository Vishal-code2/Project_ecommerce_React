import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./UserProduct.css"
import axios from 'axios'
import{ useState } from 'react';

// const [cart, setCart] = useState([]); // local cart state

// const addToCart = () => {
//   setCart(prevCart => [...prevCart, productData]);
//   alert("Product added to cart!");
// };
// import { Link } from "react-router-dom";
// const { addToCart } = useCart();

const ProductDetail = () => {

   const {productId} = useParams()
   const [productData, setProductData] = useState([]);
    
    useEffect(() => {
        getProductDetail()

    }, [productId])
    const handleAddToCart = () => {
    axios.post(`https://project-ecommerce-react-c77l.onrender.com/cart/add/${productId}`)
      .then(response => alert('Product added to cart!'))
      .catch(error => console.error('Error adding to cart:', error));
  };

    const getProductDetail = async()=>{

       await axios.get("https://project-ecommerce-react-c77l.onrender.com/products/"+productId)
        .then((res)=>{
            console.log(res);
            setProductData(res.data.product);
            
        })
        .catch((err)=>{
            console.log(err);
        })

    }

  return (
    <div className='home'>
     
      <div className="pr">
        <div><img src={productData.image} alt="Product" height="450px" /></div>
            <div>
                <div>
                  <h1>{productData.title}</h1>
                  <h2>Price: ₹{productData.price}</h2>
                  <p>{productData.description}</p>
                  <p><b>Category:</b> {productData.category}</p>

                </div>
                
               <div className="buttons">
                <button>Buy</button>
                <button onClick={handleAddToCart}>Add to cart</button>
                {/* <button>Add to cart</button> */}
                {/* <button onClick={() => addToCart(productData)}>Add to Cart</button> */}
                {/* <button onClick={addToCart()}>Add to cart</button> */}
               </div>

            </div>

      </div>
    </div>
  )
}

export default ProductDetail