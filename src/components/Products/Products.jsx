
// import fetchProducts from '../../api/fetchProducts'
import './Products.css'
import { useState,useEffect } from 'react'


function Products(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=iphone`)
        .then((response) => response.json()
            .then((data) => {
                setProducts(data)
                // console.log(data)
            })
        ).catch(
        error => console.log(error)
        );
    }, [])

    console.log(products)

    return (
        <section className='products container'>
          {
            products.map((produto)=>  <p key={produto.results.title}> {produto.results.title} </p>
            )
          }
            
        </section>
    )
}

export default Products