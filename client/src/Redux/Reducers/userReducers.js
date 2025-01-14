import * as userConstants from "../Constants/userConstants";

// LOGIN
export const userLoginReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_LOGIN_REQUEST:
         return { isLoading: true };
      case userConstants.USER_LOGIN_SUCCESS:
         return { isLoading: false, userInfo: action.payload, isSuccess: true };
      case userConstants.USER_LOGIN_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_LOGIN_RESET:
         return {};
      case userConstants.USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// REGISTER
export const userRegisterReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_REGISTER_REQUEST:
         return { isLoading: true };
      case userConstants.USER_REGISTER_SUCCESS:
         return { isLoading: false, userInfo: action.payload, isSuccess: true };
      case userConstants.USER_REGISTER_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_REGISTER_RESET:
         return {};
      default:
         return state;
   }
};

// UPDATE PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_UPDATE_PROFILE_REQUEST:
         return { isLoading: true };
      case userConstants.USER_UPDATE_PROFILE_SUCCESS:
         return { isLoading: false, userInfo: action.payload, isSuccess: true };
      case userConstants.USER_UPDATE_PROFILE_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_UPDATE_PROFILE_RESET:
         return {};
      default:
         return state;
   }
}

// DELETE PROFILE
export const userDeleteProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_DELETE_PROFILE_REQUEST:
         return { isLoading: true };
      case userConstants.USER_DELETE_PROFILE_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.USER_DELETE_PROFILE_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_DELETE_PROFILE_RESET:
         return {};
      default:
         return state;
   }
}

// CHANGE PASSWORD
export const userChangePasswordReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_CHANGE_PASSWORD_REQUEST:
         return { isLoading: true };
      case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
         return { isLoading: false, isSuccess: true, message: action.payload.message };
      case userConstants.USER_CHANGE_PASSWORD_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_CHANGE_PASSWORD_RESET:
         return {};
      default:
         return state;
   }
}

// GET ALL BOOKMARKS
export const userGetBookmarksReducer = (state = { bookmarks: [] }, action) => {
   switch (action.type) {
      case userConstants.GET_BOOKMARKS_REQUEST:
         return { isLoading: true };
      case userConstants.GET_BOOKMARKS_SUCCESS:
         return { isLoading: false, bookmarks: action.payload };
      case userConstants.GET_BOOKMARKS_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.GET_BOOKMARKS_RESET:
         return {};
      default:
         return state;
   }
}

// DELETE ALL BOOKMARKS
export const userDeleteBookmarksReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.DELETE_BOOKMARKS_REQUEST:
         return { isLoading: true };
      case userConstants.DELETE_BOOKMARKS_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.DELETE_BOOKMARKS_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.DELETE_BOOKMARKS_RESET:
         return {};
      default:
         return state;
   }
}

// DELETE BOOKMARK BY ID
export const userDeleteBookmarkByIdReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.DELETE_BOOKMARK_BY_ID_REQUEST:
         return { isLoading: true };
      case userConstants.DELETE_BOOKMARK_BY_ID_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.DELETE_BOOKMARK_BY_ID_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.DELETE_BOOKMARK_BY_ID_RESET:
         return {};
      default:
         return state;
   }
}

// ADD BOOKMARKS
export const userAddBookmarksReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.ADD_BOOKMARKS_REQUEST:
         return { isLoading: true };
      case userConstants.ADD_BOOKMARKS_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.ADD_BOOKMARKS_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.ADD_BOOKMARKS_RESET:
         return {};
      default:
         return state;
   }
}

// GET ALL CART
export const userGetCartReducer = (state = { cart: [] }, action) => {
   switch (action.type) {
      case userConstants.GET_CART_REQUEST:
         return { isLoading: true };
      case userConstants.GET_CART_SUCCESS:
         return { isLoading: false, cart: action.payload };
      case userConstants.GET_CART_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.GET_CART_RESET:
         return { cart: [] };
      default:
         return state;
   }
}

// ADD TO CART
export const userAddToCartReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.ADD_CART_REQUEST:
         return { isLoading: true };
      case userConstants.ADD_CART_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.ADD_CART_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.ADD_CART_RESET:
         return {};
      default:
         return state;
   }
}

// DELETE FROM CART
export const userDeleteFromCartReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.DELETE_CART_REQUEST:
         return { isLoading: true };
      case userConstants.DELETE_CART_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.DELETE_CART_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.DELETE_CART_RESET:
         return {};
      default:
         return state;
   }
}

// DELETE ALL CART
export const userDeleteAllCartReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.DELETE_ALL_CART_REQUEST:
         return { isLoading: true };
      case userConstants.DELETE_ALL_CART_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.DELETE_ALL_CART_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.DELETE_ALL_CART_RESET:
         return {};
      default:
         return state;
   }
}

// ADMIN GET ALL USERS
export const adminGetAllUsersReducer = (state = { users: [] }, action) => {
   switch (action.type) {
      case userConstants.GET_ALL_USERS_REQUEST:
         return { isLoading: true };
      case userConstants.GET_ALL_USERS_SUCCESS:
         return { isLoading: false, users: action.payload };
      case userConstants.GET_ALL_USERS_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.GET_ALL_USERS_RESET:
         return { users: [] };
      default:
         return state;
   }
}

// ADMIN DELETE USER
export const adminDeleteUserReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.DELETE_USER_REQUEST:
         return { isLoading: true };
      case userConstants.DELETE_USER_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.DELETE_USER_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.DELETE_USER_RESET:
         return {};
      default:
         return state;
   }
}

// ADMIN UPDATE USER
export const adminUpdateUserReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.UPDATE_USER_REQUEST:
         return { isLoading: true };
      case userConstants.UPDATE_USER_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.UPDATE_USER_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.UPDATE_USER_RESET:
         return {};
      default:
         return state;
   }
}