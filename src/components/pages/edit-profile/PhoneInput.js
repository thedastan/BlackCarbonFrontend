import React from 'react'
import './EditProfile.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useField} from "formik";

const InputPhone = () => {

    const [field, meta, {setValue, setTouched}] = useField({name: 'phone'});
    return (
        <>
            <PhoneInput
                enableAreaCodes={true}
                inputClass="text-black"
                dropdownClass="bg-black"
                value={field.value}
                onChange={phone => setValue(phone)}
                onBlur={() => setTouched(true)}
            />
            {meta.touched && meta.error && <div>{meta.error}</div>}
        </>
    )
}
export default InputPhone