import Header from "@/components/Header"
import FormWrap from "@/components/FormWrap"
import InputComponent from "@/components/InputComponent"
import SubmitButton from "@/components/SubmitButton"
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "@/config/axios";
import { useState } from "react";


type Inputs = {
    type: string,
    description: string,
    is_free: boolean,
    price: number
    image: File
  };

const AddProduct: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const form = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async data => {
       const response = await axios.post('http://127.0.0.1:8000/api/store', data);
       console.log(response);
    }

    let [isFree, useIsFree] = useState(false)

    let setValue = (event: any) => {
        useIsFree(JSON.parse(event.target.value))
    }


    return (
        <Header>
            <FormWrap form={form} onSubmit={onSubmit} handleSubmit={handleSubmit} text="Add new product">
                <InputComponent  
                register={register}  
                name="type" 
                validation={ { required:{
                    message: "Type is required",
                    value: true,
                },
                minLength: {
                    message: 'Type should consist of at least 3 characters',
                    value: 3,
                  },
                } }
         
               />

               <p className="mb-3">Is product free?</p>

                <label className="mx-1" htmlFor="yes">Yes</label>
                <input onInput={setValue} defaultChecked type="radio" id="yes"  {...register('is_free')} value="true"/>
                
                <label className="mx-1" htmlFor="no">No</label>
                <input onInput={setValue} className="mb-5" type="radio"  {...register('is_free')}  value="false"/>

               {isFree && <InputComponent type="number" register={register} name="price"  validation={ { Number: true} } />}
                <InputComponent  register={register} name="description"  validation={ { required: true, maxLength: 200} } />
                <InputComponent type="file"  register={register} name="image"  validation={ { required: true, maxLength: 20 } } />
                <SubmitButton text="Add new product"/>
            </FormWrap>  
        </Header>
    )
}

export default AddProduct