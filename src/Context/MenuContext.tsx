import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { kenzieBurguerAPI } from "../api/kenzieBurguerApi";


interface iExportsValues{
    products: any;
    getProducts: (token: string)=> void;
}

interface iMenuProvider{
    children: React.ReactNode;
}

export const MenuContext = createContext({});

const MenuProvider = ({children}: iMenuProvider)=>{

    const navigate = useNavigate();
    
    console.log("menu context")

    const [ products, setProducts ] = useState([]);

    const token = localStorage.getItem("@kenzie-burguer: logged-user-token");
    console.log(token)

    useEffect(()=>{
        if(token){
            getProducts(token);
            console.log(token)
        }
    })

    //GETTING PRODUCTS
    const getProducts = async(token: string)=>{
        try{
            const request = await kenzieBurguerAPI.get("/products",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(request);
        }catch(err){
            console.log(err);
            navigate("/login");
        }
    }

    return(
        <MenuContext.Provider value={{}}>
            {children}
        </MenuContext.Provider>
    )

} 
export default MenuProvider;