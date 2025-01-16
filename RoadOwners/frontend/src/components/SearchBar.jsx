import { useState } from "react";

const SearchBar=({Search})=>{
    const[query,setQuery]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    Search(query)

}

return(
    <div className="search-bar">
    <form onSubmit={handleSubmit}>
         <input
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search products..."
      />
       <button type="submit">Search</button>
      </form>
</div>
)
}
export default SearchBar