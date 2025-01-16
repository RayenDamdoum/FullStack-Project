
    const ProductCard = ({ product, Delete }) => {
        return (
          <div className="product-card">
            <img src={product.imageUrl} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => Delete(product.id)}>Delete</button>
          </div>
        );
      };
      
  
  export default ProductCard