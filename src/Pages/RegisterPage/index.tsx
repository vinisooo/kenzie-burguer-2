//COMPONENTS
import { StyledBackground } from "../../Styles/LogBackground";
import { LogContainer } from "../../Styles/LogContainer";
import LogFigure from "../../Components/LogFigure";
import Form from "../../Components/Form";
import InputBox from "../../Components/InputBox";
import { StyledBtn } from "../../Styles/DefaultBtn";

//LIBS
import { useForm } from "react-hook-form";

//RESOLVER
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../resolvers";

//CONTEXT
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";


interface RegisterFormValues{
    name: string;
    email: string;
    password: string;
    confPassword: string;
}

const RegisterPage = ()=>{

    const { submitRegister } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    });

    return(
        <StyledBackground>
            <LogContainer>
                <LogFigure/>
                <Form title="Cadastro" submitCallBack={handleSubmit(submitRegister)}>
                    <InputBox errors={errors.name?.message} register={register("name")} label="Nome" type="text" />
                    <InputBox errors={errors.email?.message} register={register("email")} label="Email" type="text" />
                    <InputBox errors={errors.password?.message} register={register("password")} label="Senha" type="password" />
                    <InputBox errors={errors.confPassword?.message} register={register("confPassword")} label="Confirmar Senha" type="password" />
                    <footer>
                        <StyledBtn type="submit">Cadastrar</StyledBtn>
                    </footer>
                </Form>
            </LogContainer>
        </StyledBackground>
    )

}

export default RegisterPage;