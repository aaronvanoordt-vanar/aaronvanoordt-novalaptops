import { describe, expect, it } from 'vitest'
import { search } from './bm25'
import { products } from './products'

describe('search BM25', () => {
  it('prioriza la gamer con 16 GB', () => expect(search('gamer 16 GB', products)[0].id).toBe('n1'))
  it('ignora tildes y mayúsculas', () => expect(search('PORTÁTIL económico', products).map((p) => p.id)).toEqual(search('portatil economico', products).map((p) => p.id)))
  it('ordena puntajes de mayor a menor', () => {
    const results = search('gamer 16 GB', products)
    expect(results.every((result, i) => i === 0 || results[i - 1].score >= result.score)).toBe(true)
  })
})
