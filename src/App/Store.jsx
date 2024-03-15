import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "../Components/CourseSlice";
import JobsSlice from '../Components/JobsInternshipSlice'

export const store = configureStore({
  reducer: {
    app: CourseSlice,
    jobsInternshipsStore : JobsSlice
  },
});
