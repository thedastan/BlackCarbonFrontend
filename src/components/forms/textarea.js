import {useField} from "formik";


const TextArea = ({placeholder, classes, ...props}) => {
    const [field, meta, actions] = useField(props);
    return (
        <textarea
            placeholder={placeholder}
            className={classes}
            {...field}
            {...props}
        ></textarea>
    )
}


export default TextArea;