// useBodegaStore.ts
import { useDispatch, useSelector } from 'react-redux';
import { bodegaApi } from '../api';
import { onLoadArticles } from '../store/bodega/bodegaSlice';
import { RootState } from '../store';

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
  images: any[]; // Dependiendo de lo que contenga, puedes especificar el tipo
}

export const useBodegaStore = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: RootState) => state.bodega);

  const getArticles = async () => {
    try {
      const { data } = await bodegaApi.get<Article[]>('/articulos');
      dispatch(onLoadArticles(data));
    } catch (error) {
      console.error('Error al cargar artículos', error);
    }
  };

  return {
    // Propiedades
    articles,

    // Métodos
    getArticles,
  };
};