import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"; // Importing the userReducer from userSlice  



export const store = configureStore({
    reducer:{user:userReducer},
    // Adding the userReducer to the store
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),
    
});