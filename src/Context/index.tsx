import React, { useContext, ReactNode } from "react";

import UserProvider from "./UserContext";
import MenuProvider from "./MenuContext";

interface iProviderProps{
    children: React.ReactNode;
}

const ProviderContext = ({children}: iProviderProps)=>{

    return(
        <>
            <MenuProvider>
                <UserProvider>
                    {children}
                </UserProvider>
            </MenuProvider>
        </>
    )

}

export default ProviderContext