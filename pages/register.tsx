import Header from "@/components/Header"
import FormWrap from "@/components/FormWrap"
import InputComponent from "@/components/InputComponent"
import SubmitButton from "@/components/SubmitButton"
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "@/config/axios";


type Inputs = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  };

const Register: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const form = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async data => {
       const response = await axios.post('http://127.0.0.1:8000/api/register', data);
       console.log(response);
    }

    return (
        <Header>
 
            <FormWrap form={form} onSubmit={onSubmit} handleSubmit={handleSubmit} text="Register new user">
                <InputComponent  
                register={register}  
                name="name" 
                validation={ { required:{
                    message: 'name is required',
                    value: true,
                },
                minLength: {
                    message: 'name should consist of at least 3 characters',
                    value: 3,
                  },
                } }
         
               />
                <InputComponent  register={register} name="email"  validation={ { required: true, maxLength: 20, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/} } />
                <InputComponent  register={register} name="password"  validation={ { required: true, maxLength: 20 } } />
                <InputComponent  register={register} name="password_confirmation"  validation={ { required: true, maxLength: 20 } } />
                <SubmitButton text="Register"/>
            </FormWrap>
            
        </Header>
    )
}

export default Register