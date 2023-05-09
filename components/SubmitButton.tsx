type Props = {
    text: string
}

const SubmitButton: React.FC<Props> = (props) => {
    return (
        <button className="w-full text-center p-4 bg-violet-400 text-white text-sm rounded-sm hover:bg-violet-950">{props.text}</button>
    );
}

export default SubmitButton