'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalUSD, totalVES, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F4F4F6] shadow-2xl flex flex-col border-l border-zinc-800">
          <div className="p-6 bg-[#0D0D0D] text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-gray-300" />
              <h2 className="text-sm font-bold uppercase tracking-wider">Tu Carrito ({totalItems})</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className="text-xs uppercase tracking-widest font-semibold">El carrito está vacío</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex space-x-4 bg-white p-3 rounded border border-gray-200 shadow-sm">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded bg-gray-100" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#0D0D0D] line-clamp-1">{item.title}</h4>
                      <span className="text-xs text-gray-500 font-medium">${item.priceUSD.toFixed(2)} USD</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded bg-gray-50">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-200">
                          <Minus className="w-3 h-3 text-gray-700" />
                        </button>
                        <span className="px-2 text-xs font-bold text-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-200">
                          <Plus className="w-3 h-3 text-gray-700" />
                        </button>
                      </div>

                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-300 bg-white space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Subtotal USD:</span>
                  <span className="font-bold text-black">${totalUSD.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#0D0D0D]">
                  <span>Subtotal Bs. (BCV):</span>
                  <span className="text-emerald-700">{totalVES.toFixed(2)} Bs.</span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-[#0D0D0D] text-white text-center font-bold py-3 text-xs uppercase tracking-widest rounded hover:bg-zinc-800 transition-colors"
              >
                Proceder al Pago
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}