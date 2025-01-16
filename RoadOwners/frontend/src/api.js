import axios from "axios"

const api =axios.create({baseURL:"http://localhost:3000/api"})


// Products Routers

export const getProducts=()=>api.get("/prods/getProds")

export const addProduct=(prodData)=>api.post("/prods/addProd",prodData)

export const deleteProduct=(id)=>api.delete(`/prods/${id}`)

export const updateProduct=(id,prodData)=>api.post(`/prods/${id}`,prodData)

export const searchProduct=(query)=>api.get(`/prods/search?query=${query}`)

//User Routers
export const registerUser=(userData)=>api.post("/register",userData)

export const loginUser=(userData)=> api.post("/login",userData)


