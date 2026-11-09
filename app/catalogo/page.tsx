import { Suspense } from 'react'
import { Header, CatalogContent } from '@/components/storefront'
export default function CatalogoPage() { return <><Header/><main className="page-shell"><div className="page-heading"><span className="eyebrow">Colección completa</span><h1>Encuentra tu forma de trabajar.</h1><p>Doce configuraciones diseñadas para cada ritmo, idea y presupuesto.</p></div><Suspense fallback={<div className="search-wrap">Cargando catálogo...</div>}><CatalogContent/></Suspense></main></> }
