import React from "react";
import { StyledForm } from "./styled";
import { Link } from "react-router-dom";

interface iFormProps{
    title?: string;
    children?: React.ReactNode;
    submitCallBack?: ()=> void;
    link?: any;
    linkTitle?: string;
}

const Form = ({title, children, submitCallBack, link, linkTitle}: iFormProps)=>{

    return(
        <StyledForm onSubmit={submitCallBack}>
            <header>
                <h1>{title}</h1>
                <Link to={link}>{linkTitle}</Link>
            </header>
            {children}
        </StyledForm>
    )

}

export default Form;