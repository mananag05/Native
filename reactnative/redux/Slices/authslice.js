import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name : 'AUTHENTICATION',
    initialState : false,
    reducers : {
        LogInToApp : ( state , action) => {
            return true;
        },
        Logout : ( state , action ) => {
            return false;
        }
    }
})

export const { LogInToApp , Logout} = AuthSlice.actions;
export default AuthSlice.reducer;