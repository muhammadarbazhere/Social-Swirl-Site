import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    nextCourseId: 1 // Initialize the next course ID
  },

  reducers: {
    addCourseFunc: (state, action) => {
      const { Title, Description, Category, Charges, Duration, Image } = action.payload;

      state.data.push({
        id: state.nextCourseId, // Use the next course ID
        Title,
        Description,
        Category,
        Charges,
        Duration,
        Image,
      });

      // Increment the next course ID for the next addition
      state.nextCourseId++;
    },

    deleteCourseFunc: (state, action) => {
      const idToDelete = action.payload;
      state.data = state.data.filter((item) => item.id !== idToDelete);
    },

    editCourseFunc: (state, action) => {
      const { id, updatedCourse } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.data[index] = { ...updatedCourse, id };
      }

    },
  },
});

export const { addCourseFunc, deleteCourseFunc, editCourseFunc } = CourseSlice.actions;
export default CourseSlice.reducer;

