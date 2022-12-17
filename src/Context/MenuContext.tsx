import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { kenzieBurguerAPI } from "../api/kenzieBurguerApi";

//
import { iProduct } from "../DefaultInterfaces";

interface iExportsValues{
    products: iProduct[];
    cartProducts: iProduct[];
    addToCart: (product: iProduct)=>void;
    cartModal: boolean;
    setCartModal: React.Dispatch<React.SetStateAction<boolean>>
    removeSameFromCart: (product: iProduct) => void;
    removeFromCart: (product: iProduct) =>void;
    totalPrice: number;
    removeAllFromCart: ()=> void;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
    getFiltered: ()=> iProduct[]; 
    getProducts: (token: string) => void;
}

interface iMenuProvider{
    children: React.ReactNode;
}

export const MenuContext = createContext({} as iExportsValues);

const MenuProvider = ({children}: iMenuProvider)=>{

    const navigate = useNavigate();

    const [ products, setProducts ] = useState([] as iProduct[]);

    const [ cartProducts, setCartProducts ] = useState<iProduct[]>([]);
    const [ cartModal, setCartModal ] = useState<boolean>(false);
    const [ totalPrice, setTotalPrice ] = useState(0);
    
    const [ search,setSearch ] = useState<string>("");

    const token = localStorage.getItem("@kenzie-burguer: logged-user-token");

    useEffect(()=>{
        if(token){
            getProducts(token);
            getTotalPrice();
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
        // const cartID = cartProducts.length > 0? cartProducts[cartProducts.length -1].cartID + 1 : 0;


        const auxArr = [...cartProducts]; 
        const getProduct = auxArr.find((el)=>{
            return el.id === product.id
        })

        if(getProduct){
            getProduct.counter = getProduct.counter + 1;
            
        }else{
            auxArr.push(product);
        }
        
        setCartProducts(auxArr);

        // getTotalPrice();
    }


    const removeSameFromCart = (product: iProduct)=>{
        setCartProducts(
            cartProducts.filter((el: iProduct)=>{
                return el.id !== product.id
            })
        );
        getTotalPrice();
    }
    

    const removeFromCart = (product: iProduct)=>{

        const auxArr = [...cartProducts]; 
        const getProduct = auxArr.find((el)=>{
            return el.id === product.id
        })

        if(getProduct){
            if(getProduct.counter > 1){
                getProduct.counter = getProduct.counter - 1;

                setCartProducts(auxArr);
            }else{
                removeSameFromCart(product)
            }
        }
    }

    const removeAllFromCart = ()=>{
        setCartProducts([]);
    }

    const getTotalPrice = ()=>{
        const priceCalc = cartProducts.reduce((a: any,b: iProduct)=>{
            return a + (b.price * b.counter);
        },0);

        setTotalPrice(priceCalc);
    }
    useEffect(()=>{
        getTotalPrice();
    })
    

    //FILTER PRODUCTS
    const getFiltered = ()=>{
        if(search.trim() === ""){
            return products;
        }else{
            const filteredArr = products.filter((el)=>{
                return el.name.toLowerCase().includes(search.toLowerCase()) ||
                    el.category.toLowerCase().includes(search.toLowerCase())
            })

            return filteredArr;
        }
    }

    return(
        <MenuContext.Provider value={{products, cartProducts, addToCart, cartModal, setCartModal, removeSameFromCart, totalPrice, removeFromCart, removeAllFromCart, search, setSearch, getFiltered, getProducts}}>
            {children}
        </MenuContext.Provider>
    )

} 
export default MenuProvider;