import { error } from "console";
import React from "react";
import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';


type Props = {
    name: string
    register: any
    validation: any
    type: string
}

const InputComponent: React.FC<Props> = (props) => {

    const {
        formState: { errors },
      } = useFormContext();

    return (
        <div className="mb-5">
        <label htmlFor={props.name}>{props.name}</label>
        <input type={props.type ? props.type : 'text'} {...props.register(props.name, props.validation)} className="w-full border border-gray-500 p-2  rounded-md"/>
        <p>
            <ErrorMessage errors={errors} name={props.name} />
        </p>
    
    </div>
    );
}

export default InputComponent