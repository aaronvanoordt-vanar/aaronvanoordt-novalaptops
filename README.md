# NovaLaptops

Tienda en línea de laptops ficticias construida con Next.js, App Router, TypeScript y Tailwind CSS. La interfaz está completamente en español y no procesa pagos reales.

## Vistas

- `/`: landing con hero, laptops destacadas y navegación.
- `/catalogo`: catálogo completo con buscador BM25 y puntajes.
- `/producto/[id]`: detalle, especificaciones y acción de carrito.
- `/carrito`: cantidades, subtotales, total y pedido simulado.

## Buscador BM25

`lib/bm25.ts` implementa un buscador puro con k1=1.2 y b=0.75. Normaliza mayúsculas, tildes y puntuación; conserva números para priorizar consultas como `gamer 16 GB`.

## Comandos

```bash
pnpm install
pnpm dev
pnpm lint
pnpm test
pnpm build
```
