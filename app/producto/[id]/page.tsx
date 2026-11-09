'use client'

import { useParams } from 'next/navigation'
import { Header, money } from '@/components/storefront'
import { products } from '@/lib/products'
import { ProductActions } from './product-actions'

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return <><Header /><main className="page-shell"><h1>Producto no encontrado</h1><p>La laptop que buscas ya no está disponible.</p></main></>
  }

  return (
    <>
      <Header />
      <main className="page-shell detail">
        <div className="detail-image">
          <img src={product.imagen} alt={`Laptop ${product.marca} ${product.modelo}`} />
          <span className="image-mark large">{product.marca.slice(0, 1)}</span>
        </div>
        <div className="detail-copy">
          <span className="eyebrow">{product.marca} / Serie 2026</span>
          <h1>{product.modelo}</h1>
          <p className="detail-description">{product.descripcion}</p>
          <strong className="detail-price">{money(product.precio)}</strong>
          <div className="specs">
            <div><span>Procesador</span><b>{product.procesador}</b></div>
            <div><span>Memoria RAM</span><b>{product.ram}</b></div>
            <div><span>Almacenamiento</span><b>{product.almacenamiento}</b></div>
          </div>
          <ProductActions product={product} />
        </div>
      </main>
    </>
  )
}
