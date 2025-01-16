import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home.jsx"
import Category from "./pages/category.jsx"
import AddProduct from "./pages/AddProduct.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"


const App = () => (
  <Router>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/category"element={<Category/>}/>
      <Route path="/add-product" element={<AddProduct/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>
);

export default App;