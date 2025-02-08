import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/Slices/userSlice'; 

export default configureStore({
  reducer: {
    useradd: userReducer, 
  },
});
