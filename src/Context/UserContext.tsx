import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { kenzieBurguerAPI } from "../api/kenzieBurguerApi";

import { useNavigate } from "react-router-dom";

interface iExportValues{
    submitLogin: (data: object)=> void;
    submitRegister: (data: object)=> void;
}

interface iUserProviderProps{
    children: React.ReactNode;
}

export const UserContext = createContext({} as iExportValues);

const UserProvider = ({children}: iUserProviderProps)=>{

    const navigate = useNavigate();

    const [ user, setUser ] = useState({});
    //LOGIN
    const login = async(data: object)=>{
        try{
            const request = await kenzieBurguerAPI.post("/login", data);

            navigate("/menu");
            
            setUser(request);
            localStorage.setItem("@kenzie-burguer: logged-user-token", request.data.accessToken)
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
            const request = await kenzieBurguerAPI.post("/users",data)

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

    return(
        <UserContext.Provider value={{submitLogin, submitRegister}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider