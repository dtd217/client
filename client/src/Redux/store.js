import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/userReducers";

const rootReducer = combineReducers({
   // User Reducers
   userLogin: User.userLoginReducer,
   userRegister: User.userRegisterReducer,
   userUpdateProfile: User.userUpdateProfileReducer,
   userDeleteProfile: User.userDeleteProfileReducer,
   userChangePassword: User.userChangePasswordReducer,
   userGetBookmarks: User.userGetBookmarksReducer,
   userDeleteBookmarks: User.userDeleteBookmarksReducer,
   userDeleteBookmarkById: User.userDeleteBookmarkByIdReducer,
   adminGetAllUsers: User.adminGetAllUsersReducer,
   adminDeleteUser: User.adminDeleteUserReducer,
});

// Lấy userInfo từ localStorage
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

// InitialState
const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
   reducer: rootReducer,
   preloadedState: initialState,
});