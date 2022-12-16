import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Menu from "../Pages/Menu";

const RouterComp = ()=>{

    return(
        <Routes>
            <Route path="/" element={<Navigate to ="/login"/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/menu" element={<Menu/>}/>
        </Routes>
    )
}

export default RouterComp