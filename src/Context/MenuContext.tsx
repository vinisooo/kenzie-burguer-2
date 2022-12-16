import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { kenzieBurguerAPI } from "../api/kenzieBurguerApi";


interface iProduct{
    id: number;
    name: string;
    category: string;
    price: number;
    imbg: string;
}

interface iExportsValues{
    products: iProduct[];
    cartProducts: iProduct[];
    addToCart: (product: iProduct)=>void;
}

interface iMenuProvider{
    children: React.ReactNode;
}

export const MenuContext = createContext({} as iExportsValues);

const MenuProvider = ({children}: iMenuProvider)=>{

    const navigate = useNavigate();

    const [ products, setProducts ] = useState([] as iProduct[]);
    const [ cartProducts, setCartProducts ] = useState([] as iProduct[]);

    const token = localStorage.getItem("@kenzie-burguer: logged-user-token");

    useEffect(()=>{
        if(token){
            getProducts(token);
        }
    },[]);

    //GETTING PRODUCTS
    const getProducts = async(token: string)=>{
        try{
            const request = await kenzieBurguerAPI.get("/products",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            setProducts(request.data);
        }catch(err){
            console.log(err);
            navigate("/login");
        }
    }


    //CART
    const addToCart = (product: iProduct)=>{
        setCartProducts([...cartProducts, product]);
    }
    
    return(
        <MenuContext.Provider value={{products, cartProducts, addToCart}}>
            {children}
        </MenuContext.Provider>
    )

} 
export default MenuProvider;