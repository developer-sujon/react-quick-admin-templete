//External import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import { authService } from "./services/authService";
import { categoryService } from "./services/categoryService";
import { profileService } from "./services/profileService";
import authReducer from "./slice/authReducer";
import settingReducer from "./slice/settingReducer";

const store = configureStore({
  reducer: {
    authReducer,
    settingReducer,
    [authService.reducerPath]: authService.reducer,
    [profileService.reducerPath]: profileService.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authService.middleware,
      profileService.middleware,
      categoryService.middleware,
    ]),
});

export default store;
