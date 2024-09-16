import { Routes,Route } from 'react-router-dom'
import { ArticulosPage, BodegaPage, ValeSalidaPage } from '../bodega'
import { LoginPage } from '@/auth'
import { ResponsiveSidebar } from '@/components/responsive-sidebar'

export const AppRouter = () => {
  return (
    <Routes>
    {/* Ruta para el LoginPage sin el sidebar */}
    <Route path="/" element={<LoginPage />} />

    {/* Rutas envueltas por el ResponsiveSidebar */}
    <Route element={<ResponsiveSidebar />}>
      <Route path="/bodega" element={<BodegaPage />} />
      <Route path="/articulos" element={<ArticulosPage />} />
      <Route path="/vale-salida" element={<ValeSalidaPage />} />
      {/* Puedes agregar más rutas aquí */}
      </Route>
    </Routes>
  )
}