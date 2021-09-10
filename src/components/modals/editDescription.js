import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import editDescriptionModal from "../../redux/reducers/editDescriptionModal";


const EditDescription = () => {
	const dispatch = useDispatch();
	const state = useSelector((allState) => {
		return {
			isActive: allState.editDescriptionModal.isActive,
			isLoading: allState.editDescriptionModal.isLoading,
		    hasError: allState.editDescriptionModal.hasError,
		    message: allState.editDescriptionModal.message,
		    profile: allState.auth.profile
		}
	});

	return (
		<div className={`${state.isActive ? "active": ""} user-biography-wrapper fixed left-0 top-0 w-full h-full flex justify-center items-center`}>
		  <div className="user-biography-modal relative">
		    <i className="fal fa-times text-white close-modal absolute cursor-pointer" />
		    <form action="#src/" className="biography-change-form grid grid-cols-1 justify-start">
		      <textarea className="biography-text resize-none text-white" placeholder="Напишите о себе" defaultValue={""} />
		      <div className="modal__bottom">
		        <button className="save-changes-btn text-white font-semibold">
		          	 Изменить
		        </button>
		      </div>
		    </form>
		  </div>
		</div>
	)
}

export default EditDescription;
