import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {},
    token: "",
    isAuth: false,
    error: null
    };

export const signupUser = createAsyncThunk('currentUser/signup', async (userInfo) => {
    try{
        const url = "http://localhost:3001/signup"
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        if(res.ok){
            const token = res.headers.get("Authorization")
            const user = data.data.data
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            return { token, user };
        }
        throw data.error    
    }
    catch(error){
        console.log(error)
        return error
    }
}


)

export const loginUser = createAsyncThunk('currentUser/login', async (userInfo) => {
    try{
        const url = "http://localhost:3001/login"
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        if(res.ok){
            const token = res.headers.get("Authorization")
            const user = data.data.data
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            return { token, user };
        }
        throw data.error    
    }

    catch(error){
        console.log(error)
        return error
    }

}
)

export const logoutUser = createAsyncThunk('currentUser/logout', async ({dispatch}) => {
    try{
        const url = "http://localhost:3001/logout"
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
        })
        const data = await res.json();
        if(res.ok){
            dispatch(logout())
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            return data;
        }
        throw data.error    
    }
    catch(error){
        console.log(error)
        return error
    }
}
)




export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers:{
        authRequest: (state) =>( {
            ...state,
            loading: true            
        }),
        authSuccess: (state, action) => ({
            ...state,
            currentUser: action.payload.user,
            token: action.payload.token,
            isAuth: true
        }),
        authFailure: (state, action) => ({
            ...state,
            isAuth: false,
            error: action.payload
        }),
        logout: (state) => ({
            ...state,
            currentUser: {},
            token: "",
            isAuth: false
        })

    }
})

export const { authRequest, authSuccess, authFailure, logout } = currentUserSlice.actions;

export const selectCurrentUser = (state) => state.currentUser.currentUser;
export const selectToken = (state) => state.currentUser.token;

export default currentUserSlice.reducer;

