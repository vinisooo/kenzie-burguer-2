import React, { useContext, ReactNode } from "react";

import UserProvider from "./UserContext";
import MenuProvider from "./MenuContext";

interface iProviderProps{
    children: React.ReactNode;
}

const ProviderContext = ({children}: iProviderProps)=>{

    return(
        <>
            <UserProvider>
                <MenuProvider>
                    {children}
                </MenuProvider>
            </UserProvider>
        </>
    )

}

export default ProviderContext