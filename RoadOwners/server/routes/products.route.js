const express=require("express")
const Router=express.Router()
const{getAllProducts,addProduct,deleteProduct,updateProduct,searchProduct}=require("../controllers/products.controller")

Router.get("/getProds",getAllProducts)
Router.post("/addProd",addProduct)
Router.delete("/:id",deleteProduct)
Router.post("/:id",updateProduct)
Router.get("/search",searchProduct)

module.exports=Router 