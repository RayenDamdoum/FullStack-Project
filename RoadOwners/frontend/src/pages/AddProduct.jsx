import { useState } from "react"
import { addProduct } from "../api.js"
import axios from "axios"

const AddProduct = () => {
  const [name, setName] = useState("")
  const [imageUrl, setImage] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit=async(e)=>{
  e.preventDefault()
  const productData={name,imageUrl,price}
  await addProduct(productData)
}

return(
<div className="add-product-page">
<h2>AddProduct</h2>
   <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImage(e.target.value)}
          required
        />
          <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct