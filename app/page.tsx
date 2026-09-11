import React from 'react';
import ProductList from '../components/ProductList'; // O los componentes de tu tienda

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Tienda MBA</h1>
        <p className="text-gray-600 mt-2">Catálogo Oficial de Productos</p>
      </header>
      <ProductList />
    </main>
  );
}