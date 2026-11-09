export type Product = { id: string; marca: string; modelo: string; precio: number; procesador: string; ram: string; almacenamiento: string; descripcion: string; imagen: string }

export const products: Product[] = [
  { id: 'n1', marca: 'Auralis', modelo: 'Aura Air 14', precio: 2199, procesador: 'Nexa Core i5', ram: '8 GB', almacenamiento: '512 GB SSD', descripcion: 'Portátil económico, ligero y confiable para estudiar y trabajar todos los días.', imagen: '/placeholder.png' },
  { id: 'n2', marca: 'Voltara', modelo: 'Volt One 15', precio: 2499, procesador: 'Nexa Core i5', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Portátil económico con autonomía extendida y pantalla cómoda para oficina.', imagen: '/placeholder.png' },
  { id: 'n3', marca: 'Lúmina', modelo: 'Lumen Go 13', precio: 1899, procesador: 'Orbis Ryzen 3', ram: '8 GB', almacenamiento: '256 GB SSD', descripcion: 'Una laptop económica y compacta para tareas, videollamadas y navegación.', imagen: '/placeholder.png' },
  { id: 'n4', marca: 'Kairo', modelo: 'Kairo Office 15', precio: 2899, procesador: 'Orbis Ryzen 5', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Rendimiento equilibrado para hojas de cálculo, reuniones y multitarea.', imagen: '/placeholder.png' },
  { id: 'n5', marca: 'Auralis', modelo: 'Aura Pro 14', precio: 3499, procesador: 'Nexa Core i7', ram: '16 GB', almacenamiento: '1 TB SSD', descripcion: 'Portátil ultraligera con acabado premium para profesionales en movimiento.', imagen: '/placeholder.png' },
  { id: 'n6', marca: 'Voltara', modelo: 'Volt Studio 16', precio: 4699, procesador: 'Nexa Core i7', ram: '32 GB', almacenamiento: '1 TB SSD', descripcion: 'Creada para diseño, edición y flujos creativos exigentes con gran color.', imagen: '/placeholder.png' },
  { id: 'n7', marca: 'Nébula', modelo: 'Nébula Gamer 8', precio: 3299, procesador: 'Orbis Ryzen 5', ram: '8 GB', almacenamiento: '512 GB SSD', descripcion: 'Laptop gamer de entrada con gráficos fluidos y teclado retroiluminado.', imagen: '/placeholder.png' },
  { id: 'n8', marca: 'Nébula', modelo: 'Nébula Gamer 16', precio: 4299, procesador: 'Orbis Ryzen 7', ram: '16 GB', almacenamiento: '1 TB SSD', descripcion: 'Laptop gamer versátil para jugar, crear contenido y competir sin pausas.', imagen: '/placeholder.png' },
  { id: 'n9', marca: 'Nébula', modelo: 'Nébula Gamer 32', precio: 5899, procesador: 'Nexa Core i9', ram: '32 GB', almacenamiento: '1 TB SSD', descripcion: 'Laptop gamer de alto rendimiento para los títulos más exigentes.', imagen: '/placeholder.png' },
  { id: 'n10', marca: 'Marea', modelo: 'Marea Design 15', precio: 5199, procesador: 'Nexa Core i7', ram: '32 GB', almacenamiento: '1 TB SSD', descripcion: 'Potencia para diseño 3D y edición con pantalla amplia de gran precisión.', imagen: '/placeholder.png' },
  { id: 'n11', marca: 'Kairo', modelo: 'Kairo Flex 14', precio: 3799, procesador: 'Orbis Ryzen 7', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Convertible, silenciosa y flexible para presentar ideas desde cualquier lugar.', imagen: '/placeholder.png' },
  { id: 'n12', marca: 'Lúmina', modelo: 'Lumen Ultra 13', precio: 4499, procesador: 'Nexa Core i7', ram: '16 GB', almacenamiento: '1 TB SSD', descripcion: 'Ultraligera y elegante, pensada para viajes, escritura y concentración.', imagen: '/placeholder.png' },
]

export const featuredProducts = products.slice(4, 7)
