import { useEffect, useState } from "react"

import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import {DropdownMenu,DropdownMenuContent, DropdownMenuItem,DropdownMenuLabel,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useBodegaStore } from "@/hooks"


export function ResponsiveTable() {

  const [searchTerm, setSearchTerm] = useState("")
  const { articles, getArticles } = useBodegaStore();

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const filteredArticles = articles.filter((article) =>
    Object.values(article).some((value) =>
      value !== null &&
      value
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4 ">
      <h1 className="text-4xl font-bold mb-6 ">Artículos</h1>
      <div className="mb-5">
        <Input
          placeholder="Buscar artículos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-full h-[55px]"
        />
      </div>
      <div className="overflow-x-auto rounded-lg border ">
        <Table>
          <TableHeader className="bg-gray-950 ">
            <TableRow className=" ">
              <TableHead className="w-[50px]    text-wrap">ID</TableHead>
              <TableHead className="w-[550px]   text-wrap ">Nombre</TableHead>
              <TableHead className="w-[85px]   ">SAP</TableHead>
              <TableHead className="w-[85px]   ">SKU</TableHead>
              <TableHead className="w-[85px]  ">Código Interno</TableHead>
              <TableHead className="w-[120px]   ">Unidad de Medida</TableHead>
              <TableHead className="w-[100px]   ">Precio</TableHead>
              <TableHead className="">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow key={article.id} className=" bg-slate-100 border-r-2">
                <TableCell className="font-bold">{article.id}</TableCell>
                <TableCell className="">{article.nombre}</TableCell>
                <TableCell className="">{article.sap}</TableCell>
                <TableCell className="">{article.sku}</TableCell>
                <TableCell className="">{article.codigo_interno}</TableCell>
                <TableCell className="">{article.unidad_medida}</TableCell>
                <TableCell className="">${article.precio}</TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menú</span>
                        <MoreHorizontal className="align-center h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Eliminar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}