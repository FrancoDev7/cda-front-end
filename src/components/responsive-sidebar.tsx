import { Outlet } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"


const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/articulos", label: "Articulos" },
  { href: "/vale-salida", label: "Vale Salida" },
  { href: "/vale-entrada", label: "Vale Entrada" },
  { href: "/reports", label: "Informes" },
  { href: "/settings", label: "Configuración" },
]

export function ResponsiveSidebar() {
  const SidebarContent = () => (
    <ScrollArea className="h-full py-6 pl-6 pr-6">
      <h2 className="mb-12 text-xl font-semibold">Bienvenido Francisco </h2>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center rounded-lg px-3 py-2 text-gray-900 hover:bg-slate-950 hover:text-white dark:text-gray-100 dark:hover:bg-gray-800"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </ScrollArea>
  )

  return (
    <div className="flex h-screen">
      {/* Sidebar para pantallas grandes */}
      <aside className="hidden w-64 border-r-8 bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        <SidebarContent />
      </aside>

      {/* Drawer para pantallas pequeñas */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-4 lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="px-6 py-4">
            <SheetTitle>Menú</SheetTitle>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Contenido principal */}
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}