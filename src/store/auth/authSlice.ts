import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  uid: string;
  name: string;
}

interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: User | null;
  errorMessage: string | undefined;
}

const initialState: AuthState = {
  status: 'checking', // 'checking' | 'authenticated' | 'not-authenticated'
  user: null,
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = null;
      state.errorMessage = undefined;
    },
    onLogin: (state, action: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;