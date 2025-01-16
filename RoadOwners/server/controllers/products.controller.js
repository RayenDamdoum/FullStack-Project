const {products}=require("../models/index")
const{Op}=require ('sequelize')
module.exports={
    getAllProducts:async(req,res)=>{
        try {
            const Prods=await products.findAll()
        res.status(200).send(Prods)
            
        } catch (error) {
            res.status(500).json({message:"Failed to get Products"},error)
            
        }
    },
    addProduct:async(req,res)=>{
        try {
            const {name,imageUrl,price}=req.body
            const newProd=await products.create({name,imageUrl,price})
            res.status(201).send(newProd)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    deleteProduct:async(req,res)=>{
        const{id}=req.params
        try {
            if(!id){
                res.status(404).json({message:"product not found!"})
            }
            const prod=await products.destroy({where:{id:id}})
            return res.send({message:"product deleted",prod})
        } catch (error) {
            throw error
            
        }
    },
    updateProduct:async(req,res)=>{
        const{id}=req.params
        const {name,imageUrl,price}=req.body
        if(!id){
            res.status(404).json({message:"product not found!"})   
        } 
        const prod=await products.findOne({id})
        if(!prod){
            res.status(404).json({message:"product not found!"}) 
        }
        const upadteProd=await products.update(
            {
            name:name || prod.name,
            imageUrl:imageUrl || prod.imageUrl,
            price:price || prod.price,
        },{
            where:{
                id:id
            }
        })
        return res.send({message:"product updated",upadteProd})
    },
    searchProduct: async (req, res) => {
        const {query}=req.query
        try {
          const prods=await products.findAll({
            where: {
              name: {
                [Op.like]:`%${query}%`
              }
            }
          })
          res.status(200).send(prods)
        }  catch(error){
           res.status(500).json({ message: "Failed to search products", error })
        }
      }
    }