import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  loading: false,
  success: false,
  error: null,
};
export const sendConfirmationEmail = createAsyncThunk(
    'email/sendConfirmation',
    async (res, { rejectWithValue }) => {
      console.log(res, "email")
      try {
        await axios.post('api/sendmail/emailUser', res);
        return res.data;
      } catch (error) { console.log(error)
        return rejectWithValue(error.response.data.errors);
      }
    }
  );
  export const sendAnnulationRdv = createAsyncThunk(
    'email/annulationRdv',
    async (res, { rejectWithValue }) => {
      console.log(res, "email")
      try {
        await axios.post('api/annulation/emailAnnulation', res);
        return res.data;
      } catch (error) { console.log(error)
        return rejectWithValue(error.response.data.errors);
      }
    }
  );


  const emailSlice = createSlice({
    name: 'email',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(sendConfirmationEmail.pending, (state,{payload}) => {
          state.loading = true
        })
        .addCase(sendConfirmationEmail.fulfilled, (state,{payload}) => {
          state.loading = false
          state.success = payload
          state.error = null
        })
        .addCase(sendConfirmationEmail.rejected, (state, {payload}) => {
          state.loading = false
          state.error = payload
         
        })


        // annulation rdv
        .addCase(sendAnnulationRdv.pending, (state,{payload}) => {
          state.loading = true
        })
        .addCase(sendAnnulationRdv.fulfilled, (state,{payload}) => {
          state.loading = false
          state.success = payload
          state.error = null
        })
        .addCase(sendAnnulationRdv.rejected, (state, {payload}) => {
          state.loading = false
          state.error = payload
         
        })
    },
  });
  
  export default emailSlice.reducer;