import {useDispatch, useSelector} from "react-redux";
import {setFieldsLoading, setMessage} from "../redux/reducers/pages/edit-profile";
import api from "../http/api";
import {setProfile, setProfileError} from "../redux/reducers/auth";


const EditProfileService = () => {
    const dispatch = useDispatch();
    const state = useSelector(allState => allState);

    const changeProfile = async (info) => {
        const { auth } = state;
        const result = {
            errors: {},
            message: ""
        }
        const formData = new FormData();
        formData.append('key', auth.key);
        for(let i in info){
            formData.append(i, info[i]);
        }
        dispatch(setFieldsLoading(true));
        try {
            const { data } = await api({
                url: `/users/${auth.id}/`,
                method: 'patch',
                headers: { "Content-Type": "application/x-www-form-urlencoded"},
                data: formData,
            });
            dispatch(setProfile(data));
            result.message = "Успешно изменено";
        } catch (e) {
            if(e.response){
                if(e.response.status === 400){
                    result.errors = e.response.data;
                }else {
                    result.message = "Произошла какая то ошибка";
                }
            }else if(e.request){
                result.message = "Произошла какая то ошибка";
            }else{
                result.message = "Произошла какая то ошибка";
            }
            dispatch(setProfileError(true));
        } finally {
            dispatch(setMessage(result.message));
            dispatch(setFieldsLoading(false));
            return result.errors;
        }
    }
    return {
        changeProfile
    }
}

export default EditProfileService;