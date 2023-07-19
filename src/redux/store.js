import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './user/userSlice'


const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;