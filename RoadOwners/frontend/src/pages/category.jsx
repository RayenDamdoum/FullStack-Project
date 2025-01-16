import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {getProducts,deleteProduct,searchProduct} from "../api"
import Navbar from "../components/navbar.jsx"
import ProductList from "../components/ProductList.jsx"

const category=()=>{
    const[products,setProducts]=useState([])
    console.log("data",products)
    
    


    const fetchProducts = async () => {
        try {
          const resp = await getProducts()
          setProducts(resp.data)
          console.log("Fetched products:", resp.data)
        } catch (error) {
          console.error("Error fetching products:", error)
        }
      }

    // const fetchProducts=async()=>{
    //     const resp=await getProducts()
    //     setProducts(resp.data)
    //     console.log("data",resp.data);
        
    // }
    useEffect(()=>{
        fetchProducts()
    },[])

    // const handleAdd=async(e)=>{
    //   e.preventDefault()

    // }

    const handleSearch = async (query) => {
        const resp = await searchProduct(query)
        setProducts(resp.data)
      }


    const handleDelete = async (id) => {
        await deleteProduct(id)
         fetchProducts()
      }
return (
    <div className="category-page">
        <Navbar Search={handleSearch} />
        {/* <SearchBar Search={handleSearch}/> */}
        <Link to="/add-product">
        <button className="add-product-button">Add Product</button>
      </Link>
        <ProductList product={products} Delete={handleDelete}/>
    </div>
)



}
export default category
