import ProductCard from "./productCard.jsx"

const ProductList=({product,Delete})=>{
    console.log("product",product);
    
    return (
        <div className="product-list">
            {product.map((element)=>(
                <ProductCard key={element.id} product={element} Delete={Delete}/>
            ))}
        </div>
    )
}
export default ProductList
