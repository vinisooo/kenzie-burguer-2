//COMPONENTS
import { StyledBackground } from "../../Styles/LogBackground";
import { LogContainer } from "../../Styles/LogContainer";
import LogFigure from "../../Components/LogFigure";
import Form from "../../Components/Form";
import InputBox from "../../Components/InputBox";
import { StyledBtn, StyledLink } from "../../Styles/DefaultBtn";
import { StyledCta } from "./styled";

//LIBS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

//CONTEXT
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";


//RESOLVER
import { loginSchema } from "../../resolvers";

interface LoginFormValues{
    email: string;
    password: string
}

const LoginPage = ()=>{

    const { submitLogin } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        mode: "onBlur",
        resolver: yupResolver(loginSchema)
    });

    

    return(
        <StyledBackground>
            <LogContainer>
                <Form title="Login"submitCallBack={handleSubmit(submitLogin)} >
                    <InputBox errors={errors.email?.message} register={register("email")} label="Nome" type="text" />
                    <InputBox errors={errors.password?.message} register={register("password")} label="Senha" type="password" />

                    <footer>
                        <StyledBtn color="green">Logar</StyledBtn>
                        <StyledCta>Crie sua conta para saborear muitas delícias e matar sua fome!</StyledCta>
                        <StyledLink to="/register">Cadastrar</StyledLink>
                    </footer>
                </Form>
                <LogFigure/>
            </LogContainer>
        </StyledBackground>
    )

}

export default LoginPage;