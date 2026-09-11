'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Catálogo Exposición Museo de Bellas Artes',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80',
    description: 'Guía oficial de las obras exhibidas en la colección permanente.'
  },
  {
    id: 2,
    title: 'Lámina de Arte Coleccionable',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&q=80',
    description: 'Impresión de alta calidad en papel de grabado.'
  },
  {
    id: 3,
    title: 'Libreta de Bocetos MBA',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80',
    description: 'Tapa dura con diseño exclusivo del museo.'
  }
];

export default function HomePage() {
  const { cart, addToCart } = useCart();

  // Calcula el total de ítems acumulados en el carrito
  const totalItems = cart ? cart.reduce((acc: number, item: any) => acc + (item.quantity || 1), 0) : 0;

  const handleAddToCart = (product: Product) => {
    try {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      } as any);
    } catch (err) {
      console.error('Error al añadir al carrito:', err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="max-w-6xl mx-auto mb-10 flex justify-between items-center bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tienda MBA</h1>
          <p className="text-gray-600 mt-1">Catálogo oficial del Museo de Bellas Artes</p>
        </div>
        <div className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-sm">
          <span>🛒</span>
          <span>Carrito:</span>
          <span className="bg-white text-blue-600 px-2.5 py-0.5 rounded-full text-sm font-bold">
            {totalItems}
          </span>
        </div>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors shadow-sm active:scale-95"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
