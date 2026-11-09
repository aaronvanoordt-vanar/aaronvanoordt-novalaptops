'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Product } from '@/lib/products'

type CartItem = Product & { quantity: number }
type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  add: (product: Product) => void
  remove: (id: string) => void
  update: (id: string, quantity: number) => void
}

const STORAGE_KEY = 'novalaptops-cart'
const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [loaded, setLoaded] = useState(false)

  // Lee el carrito guardado una sola vez, después de montar en el navegador
  // (en el servidor no existe localStorage, por eso no puede ir en useState).
  useEffect(() => {
    let saved: CartItem[] = []
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    } catch {
      saved = []
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(saved)
    setLoaded(true)
  }, [])

  // Guarda cada cambio, pero solo después de haber leído lo guardado.
  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, loaded])

  const value = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((n, item) => n + item.quantity, 0),
    total: items.reduce((n, item) => n + item.precio * item.quantity, 0),
    add: (product) =>
      setItems((current) =>
        current.some((item) => item.id === product.id)
          ? current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
          : [...current, { ...product, quantity: 1 }],
      ),
    remove: (id) => setItems((current) => current.filter((item) => item.id !== id)),
    update: (id, quantity) =>
      setItems((current) =>
        quantity < 1
          ? current.filter((item) => item.id !== id)
          : current.map((item) => (item.id === id ? { ...item, quantity } : item)),
      ),
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
  return context
}
