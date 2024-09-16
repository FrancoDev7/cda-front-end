// bodegaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  id: number;
  nombre: string;
  sap: number;
  codigo_interno: string;
  sku: number;
  unidad_medida: string;
  comentario: string | null;
  precio: string;
  activo: boolean;
  images: any[];
}

export interface BodegaState {
  isLoading: boolean;
  articles: Article[];
  // Otras propiedades...
}

const initialState: BodegaState = {
  isLoading: false,
  articles: [],
  // Inicializar otras propiedades...
};

export const bodegaSlice = createSlice({
  name: 'bodega',
  initialState,
  reducers: {
    onLoadArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
      state.isLoading = false;
    },
    // Otros reducers...
  },
});

// Exportar las acciones
export const { onLoadArticles } = bodegaSlice.actions;

// Exportar el reducer
export default bodegaSlice.reducer;