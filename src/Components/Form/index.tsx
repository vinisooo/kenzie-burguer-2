import React from "react";
import { StyledForm } from "./styled";

interface iFormProps{
    title?: string;
    children?: React.ReactNode;
    submitCallBack?: ()=> void;
}

const Form = ({title, children, submitCallBack}: iFormProps)=>{

    return(
        <StyledForm onSubmit={submitCallBack}>
            <header>
                <h1>{title}</h1>
            </header>
            {children}
        </StyledForm>
    )

}

export default Form;