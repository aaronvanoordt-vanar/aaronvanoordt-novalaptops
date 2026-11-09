'use client'
import Link from 'next/link'
import { Check, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/lib/products'
import { useCart } from '@/components/cart-provider'
export function ProductActions({ product }: { product: Product }) { const { add } = useCart(); const [added, setAdded] = useState(false); return <div className="actions"><button className="button primary" onClick={() => { add(product); setAdded(true) }}>{added ? <><Check size={17}/> Agregado al carrito</> : <><ShoppingBag size={17}/> Agregar al carrito</>}</button>{added && <Link href="/carrito" className="button secondary">Ir al carrito</Link>}</div> }
