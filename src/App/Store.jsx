import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "../Components/CourseSlice";

export const store = configureStore({
  reducer: {
    app: CourseSlice,
  },
});
