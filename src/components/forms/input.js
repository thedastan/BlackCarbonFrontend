import {useField} from "formik";


const Input = ({className, placeholder, ...props}) => {
    const [field] = useField(props);
    return (
        <input className={className}
               {...field}
               {...props}
        />
    )
}


export default Input;