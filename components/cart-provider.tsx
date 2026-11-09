'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Product } from '@/lib/products'

type CartItem = Product & { quantity: number }
type CartContextValue = { items: CartItem[]; count: number; total: number; add: (product: Product) => void; remove: (id: string) => void; update: (id: string, quantity: number) => void }
const CartContext = createContext<CartContextValue | null>(null)
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  useEffect(() => { const saved = localStorage.getItem('novalaptops-cart'); if (saved) setItems(JSON.parse(saved)) }, [])
  useEffect(() => { localStorage.setItem('novalaptops-cart', JSON.stringify(items)) }, [items])
  const value = useMemo(() => ({ items, count: items.reduce((n, item) => n + item.quantity, 0), total: items.reduce((n, item) => n + item.precio * item.quantity, 0), add: (product: Product) => setItems((current) => current.some((item) => item.id === product.id) ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]), remove: (id: string) => setItems((current) => current.filter((item) => item.id !== id)), update: (id: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item)) }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart debe usarse dentro de CartProvider'); return context }
