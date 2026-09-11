import React from 'react';
import CartDrawer from '../components/CartDrawer';

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-center">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Tienda MBA</h1>
        <p className="text-gray-600 mt-2">Bienvenido al catálogo del Museo de Bellas Artes</p>
      </header>
      <CartDrawer />
    </main>
  );
}
