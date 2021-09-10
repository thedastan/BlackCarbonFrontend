import {  configureStore } from '@reduxjs/toolkit';



import main from './reducers/main';
import auth from './reducers/auth';
import checkKeyModal from './reducers/checkKeyModal';
import editDescriptionModal from './reducers/editDescriptionModal';
import userPage from './reducers/pages/user';
import EditProfilePage from './reducers/pages/edit-profile';






const store = configureStore({
    reducer: {
        main,
        auth,
        checkKeyModal,
        editDescriptionModal,
        userPage,
        EditProfilePage
	},
});

export default store;



