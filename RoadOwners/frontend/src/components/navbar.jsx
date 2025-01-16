import { Link } from "react-router-dom"
import SearchBar from "./SearchBar.jsx"


 const Navbar=({Search})=>{
    return(
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/category'>Category</Link>
            <SearchBar Search={Search} />
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </nav>
    )
 }
 export default Navbar