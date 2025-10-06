import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Homepage from "./pages/Home/Homepage.js";
import NavBar from "./Components/Shared/Navbar.js";
import Recipes from "./pages/Recipes/Recipes.js";
import RecipePage from "./pages/RecipePage/RecipePage.js";
import AddRecipe from "./pages/Home/AddRecipe.js";
import MatchPage from "./pages/Matchipe/MatchPage.js";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import {AuthProvider} from "./Contexts/AuthContext.js";
import AuthWrapper from "./Wrappers/AuthWrapper.jsx";
import ReverseAuthWrapper from "./Wrappers/ReverseAuthWrapper.jsx";

function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<AuthWrapper><Homepage/></AuthWrapper>}/>
                    <Route path="/Recipes" element={<AuthWrapper><Recipes/></AuthWrapper>}/>
                    <Route path="/Recipes/:id" element={<AuthWrapper><RecipePage/></AuthWrapper>}/>
                    <Route path="/Recipes/add" element={<AuthWrapper><AddRecipe/></AuthWrapper>}/>
                    <Route path="/Matchipe" element={<AuthWrapper><MatchPage/></AuthWrapper>}/>

                    <Route path="/login" element={<ReverseAuthWrapper><Login/></ReverseAuthWrapper>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
