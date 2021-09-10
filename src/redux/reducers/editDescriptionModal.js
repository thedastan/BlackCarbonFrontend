import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isActive: false,
    isLoading: false,
    hasError: false,
    message: ""
}

const editDescriptionModal = createSlice({
    name: 'editDescriptionModal',
    initialState,
    reducers: {
        setActive(state, action){
        	state.isActive = action.payload;
        },
        setLoading(state, action){
        	state.isLoading = action.payload;
        },
        setError(state, action){
            state.hasError = action.payload;
        },
        setMessage(state, action){
        	state.message = action.payload;
        }
    },
})

export const {
    setActive,
    setLoading,
    setError,
    setMessage
} = editDescriptionModal.actions
export default editDescriptionModal.reducer;