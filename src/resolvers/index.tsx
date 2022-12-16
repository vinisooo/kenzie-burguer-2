import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().required("Nome de usuário obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
})


export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório")
        .min(3,("Seu nome de usuário precisa de no mínimo 3 letras"))
        .max(40, "Seu nome de usuário pode conter até 40 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().min(6, "Sua senha precisa ter no mínimo 6 caracteres")
        .matches(/(?=.*?[A-Z])./,"Sua senha precisa ter no mínimo uma letra maiúscula")
        .matches(/(?=.*[a-z])/,"Sua senha precisa ter no mínimo uma letra minúscula")
        .matches(/(?=.*[0-9])/, "Sua senha precisa ter no mínimo um número")
        .matches(/([^A-Za-z0-9])/, "Sua senha precisa ter no mínimo um caractere especial"),
    confPassword: yup.string().required("Confirmação de senha obrigatória")
        .oneOf([yup.ref("password")], 'Your passwords do not match.')
})