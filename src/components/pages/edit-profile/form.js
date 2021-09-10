import Description from "./description";
import Input from "./input";
import {useEffect} from "react";
import {fetchProfile} from "../../../redux/thunks/main";
import {useDispatch, useSelector} from "react-redux";
import { Formik } from 'formik';
import Loading from "../user/loading";
import * as Yup from "yup";
import socialIcons from '../../../constants/socialIcons';
import EditProfileService from '../../../services/edit-profile';


const EditForm = () => {
	const dispatch = useDispatch();
	const state = useSelector(allState => {
		return {
			auth: allState.auth,
		}
	});

	const { changeProfile } = EditProfileService();

	const validation = Yup.object({
		email: Yup.string()
			.required("Это поле обязательное")
	})

	useEffect(() => {
		dispatch(fetchProfile(state.auth.id));
	}, []);

	if(!state.auth.isAuth){
		return <h1>YOU HAVE NO ACCOUNT</h1>
	}

	const outDifferents = (values, initialValues) => {
		let index = 0;
		const result = {}
		for(let i in values){
			for(let j in initialValues){
				if(j === i && values[i] !== initialValues[j]){
					if(values[i] === "" && initialValues[j] === null) {
						continue;
					}else{
						result[i] = values[i];
						index++;
					}
				}
			}
		}
		return {
			index,
			result
		}
	}

	const resetForm = (props) => {
		props.setValues(props.initialValues);
	}

	const outBtnState = (props) => {
		const {index} = outDifferents(props.values, props.initialValues);
		if(index){
			return "Сохранить";
		}
		return "Измените поле"
	}
	if(!state.auth.profileLoaded){
		return <Loading />;
	}else {
		return (
			<div className="profile w-full">
				<img src="assets/images/user-bg.jpg" alt=""
					 className="user-bg object-cover absolute left-0 top-0 w-full"/>
				<div className="wrapper">
					<div className="profile-holder">
						<div className="profile__top items-center justify-center relative">
							<div className="w-full p-100 relative">
								<div className="profile__img absolute left-0 top-0 w-full h-full">
									<img src={require("../../../assets/images/profile.jpg").default} alt=""
										 className="object-cover w-full h-full"/>
								</div>
							</div>
							<div className="profile__user-info flex flex-col items-start justify-start">
		          <span className="user-name text-white font-bold">
		            Kubanych Akylbek
		          </span>
								<span className="user-position text-white font-normal">
		            Founder in Motion Web
		          </span>
							</div>
							<button className="edit-user-info absolute text-white right-0 bottom-0">
								Изменить
							</button>
						</div>
						<div className="profile__form w-full grid grid-cols-1">
							<Description/>
							<Formik
								initialValues={state.auth.profile}
								validationSchema={validation}
								enableReinitialize
								onSubmit={async (values, props) => {
									const {index, result} = outDifferents(values, state.auth.profile);
									if(index){
										const errors = await changeProfile(result);
										console.log(errors)
										props.setErrors(errors)
									}
								}}
							>
								{(props) => (
									<form onSubmit={props.handleSubmit}>
										<Input placeholder="Введите свой email" icon="far fa-envelope"
											   name="email"/>
										<Input placeholder="Введите ссылку на свой вебсайт" icon="fas fa-globe-americas"
											   name="other_link"/>
										<Input placeholder="Введите ссылку на instagram" icon={socialIcons.instagram}
											   name="instagram"/>
										<Input placeholder="Введите номер whatsapp" icon={socialIcons.whatsapp}
											   name="whatsapp"/>
										<Input placeholder="Введите аккаунт twitter" icon={socialIcons.twitter}
											   name="twitter"/>
										<div className="user__socials f flex w-full">
											<a className="social__item flex justify-center items-center">
												<i className="fab fa-instagram text-white"/>
											</a>
											<a className="social__item flex justify-center items-center">
												<i className="fab fa-whatsapp text-white"/>
											</a>
											<a className="social__item flex justify-center items-center">
												<i className="fab fa-facebook-square text-white"/>
											</a>
										</div>
										<div className="profile__bottom flex justify-center items-center grid grid-col-1">
											<button type="submit" className="user-connect-btn flex justify-center items-center w-full text-white">
												{outBtnState(props)}
											</button>
											<button onClick={() => resetForm(props)}>
												Отменить
											</button>
										</div>
									</form>
								)}
							</Formik>

						</div>
					</div>
				</div>
			</div>
		)
	}
}

// <div className="form__item grid items-center">
// 	<div className="icon__preview flex items-center">
// 		<i className="fab fa-whatsapp text-white" />
// 	</div>
{/*	<input className="form__item-input text-white" placeholder="Enter your Whatsapp phone" />*/}
{/*</div>*/}


export default EditForm;