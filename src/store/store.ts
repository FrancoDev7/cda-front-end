import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { bodegaSlice } from './bodega/bodegaSlice';
// Si tienes un uiSlice, puedes importarlo también
// import { uiSlice } from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    bodega: bodegaSlice.reducer,
    // ui: uiSlice.reducer, // Descomenta si es necesario
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Inferir los tipos RootState y AppDispatch a partir del store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;