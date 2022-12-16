import { StyledFieldSet } from "./styled";

interface iInputBoxProps{
    label: string;
    type: string;
    errors?: string;
    register?: object;
}


const InputBox = ({label, type, errors, register}: iInputBoxProps)=>{

    return(
        <StyledFieldSet>
            <input className={errors && "errorInput"} {...register} type={type} required={true} />
            <label>{label}</label>
            {errors && <span>{errors}</span>}
        </StyledFieldSet>
    )

}

export default InputBox;