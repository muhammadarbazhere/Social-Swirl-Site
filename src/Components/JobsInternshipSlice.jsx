import { createSlice } from "@reduxjs/toolkit";

const JobsInternshipSlice = createSlice({
  name: "jobsInternship",
  initialState: {
    data: [],
    nextId: 1 // Initialize the next ID
  },

  reducers: {
    addJobInternship: (state, action) => {
      const { title, description, type, issue, jobOrInternship, closeAfter } = action.payload;

      state.data.push({
        id: state.nextId,
        title,
        description,
        type,
        issue,
        jobOrInternship,
        status: 'Active', // Initialize status as Active
        uploadDate: new Date(), // Store the upload date
        closeAfter: parseInt(closeAfter) // Convert to integer
      });

      // Increment the next ID for the next addition
      state.nextId++;
    },

    deleteJobInternship: (state, action) => {
      const idToDelete = action.payload;
      state.data = state.data.filter((item) => item.id !== idToDelete);
    },

    editJobInternship: (state, action) => {
      const { id, updatedJobInternship } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.data[index] = { ...updatedJobInternship, id };
      }
    },

    // Automatically set job status to Closed after the specified duration
    autoCloseJobs: (state) => {
      const currentDate = new Date();
      state.data.forEach((job) => {
        const uploadDate = new Date(job.uploadDate);
        if (job.status === 'Active' && (currentDate - uploadDate) >= job.closeAfter * 24 * 60 * 60 * 1000) {
          job.status = 'Closed';
        }
      });
    },
  },
});

export const { addJobInternship, deleteJobInternship, editJobInternship, autoCloseJobs } = JobsInternshipSlice.actions;
export default JobsInternshipSlice.reducer;
