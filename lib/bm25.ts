import type { Product } from './products'

export type SearchResult = Product & { score: number }

const normalize = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ')
const tokenize = (value: string) => normalize(value).split(/\s+/).filter(Boolean)

export function search(query: string, products: Product[]): SearchResult[] {
  const terms = tokenize(query)
  if (!terms.length) return products.map((product) => ({ ...product, score: 0 }))
  const documents = products.map((product) => tokenize(`${product.marca} ${product.modelo} ${product.descripcion}`))
  const avgdl = documents.reduce((sum, doc) => sum + doc.length, 0) / documents.length
  const k1 = 1.2
  const b = 0.75
  return products.map((product, index) => {
    const doc = documents[index]
    const score = terms.reduce((total, term) => {
      const tf = doc.filter((token) => token === term).length
      if (!tf) return total
      const df = documents.filter((tokens) => tokens.includes(term)).length
      const idf = Math.log(1 + (documents.length - df + 0.5) / (df + 0.5))
      return total + idf * ((tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (doc.length / avgdl))))
    }, 0)
    return { ...product, score }
  }).filter((product) => product.score > 0).sort((a, b) => b.score - a.score)
}
