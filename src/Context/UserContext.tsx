import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { kenzieBurguerAPI } from "../api/kenzieBurguerApi";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { MenuContext } from "./MenuContext";


interface iExportValues{
    submitLogin: (data: object)=> void;
    submitRegister: (data: object)=> void;
    leaveProfile: ()=> void;
}

interface iUserProviderProps{
    children: React.ReactNode;
}

export const UserContext = createContext({} as iExportValues);

const UserProvider = ({children}: iUserProviderProps)=>{

    const navigate = useNavigate();

    const [ user, setUser ] = useState({});

    const { getProducts } = useContext(MenuContext);


    //LOGIN
    const login = async(data: object)=>{
        try{
            const request = await kenzieBurguerAPI.post("/login", data);
                    
            navigate("/menu");
            setUser(request);
            const token = request.data.accessToken;

            localStorage.setItem("@kenzie-burguer: logged-user-token", token);
            getProducts(token);
        }catch(err: any){
            if(err.response.data === "Incorrect password"){
                toast.error("Senha incorreta");
            }
        }
    }

    const submitLogin = (data: object)=>{
        login(data)
    }


    //REGISTER

    const register = async(data: object)=>{                     
        try{                                        
            const request = await kenzieBurguerAPI.post("/users",data);
                                                                    
            toast.success("Cadastro realizado com sucesso");
            navigate("/login");         
        }catch(err:any){            
            if(err.response.data === "Email already exists"){
                toast.error("Este Email já está cadastrado")
            }
        }
    }


    const submitRegister = (data: object)=>{
        register(data)
    }

    //LEAVE PROFILE
    const leaveProfile = ()=>{
        localStorage.removeItem("@kenzie-burguer: logged-user-token");
        navigate("/login")
    }

    return(
        <UserContext.Provider value={{submitLogin, submitRegister, leaveProfile}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider