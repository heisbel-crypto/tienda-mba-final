'use client';

import React from 'react';
import CartDrawer from '../components/CartDrawer';
import { useCart } from '../context/CartContext';

const PRODUCTS = [
  {
    id: 1,
    name: 'Catálogo Exposición Museo de Bellas Artes',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80',
    description: 'Guía oficial de las obras exhibidas en la colección permanente.'
  },
  {
    id: 2,
    name: 'Lámina de Arte Coleccionable',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&q=80',
    description: 'Impresión de alta calidad en papel de grabado.'
  },
  {
    id: 3,
    name: 'Libreta de Bocetos MBA',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80',
    description: 'Tapa dura con diseño exclusivo del museo.'
  }
];

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="max-w-6xl mx-auto mb-10 flex justify-between items-center bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tienda MBA</h1>
          <p className="text-gray-600 mt-1">Catálogo oficial del Museo de Bellas Artes</p>
        </div>
        <CartDrawer />
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
