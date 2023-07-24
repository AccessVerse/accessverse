import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  // eslint-disable-next-line
  session?: any;
}

const initialState: AuthState = {
  session: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action) => {
      // eslint-disable-next-line
      state.session = action.payload;
    },
  },
});

export const { setSession } = authSlice.actions;

export default authSlice.reducer;
