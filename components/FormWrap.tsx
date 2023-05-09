
import { ReactNode } from "react";
import { FormProvider } from 'react-hook-form';

type Props = {
    children: ReactNode
    text: string
    handleSubmit: any
    onSubmit:  any
    form: any
  };

const FormWrap: React.FC<Props> = (props) => {
    return (
        <FormProvider {...props.form}>
        <form  onSubmit={props.handleSubmit(props.onSubmit)} className="border-2 px-[30%] py-5 m-10 border-black">
            <h1 className="font-bold text-3xl mb-3">{props.text}</h1>
               {props.children}
        </form>
        </FormProvider>
    );
}

export default FormWrap