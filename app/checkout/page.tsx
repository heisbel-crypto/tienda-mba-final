'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Smartphone, DollarSign, Landmark, QrCode, ArrowLeft, CheckCircle, Upload } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, totalUSD, totalVES, bcvRate, clearCart } = useCart();
  const [method, setMethod] = useState<'pagomovil' | 'zelle' | 'transfer' | 'cash'>('pagomovil');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [reference, setReference] = useState('');
  const [receipt, setReceipt] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `MBA-${Math.floor(100000 + Math.random() * 900000)}`;

    const formData = new FormData();
    formData.append('orderId', generatedId);
    formData.append('clientName', clientName);
    formData.append('clientPhone', clientPhone);
    formData.append('paymentMethod', method);
    formData.append('reference', reference);
    formData.append('totalUSD', totalUSD.toString());
    formData.append('totalVES', totalVES.toString());
    formData.append('items', JSON.stringify(cart));
    if (receipt) formData.append('receipt', receipt);

    const res = await fetch('/api/orders', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setOrderId(generatedId);
      setIsSubmitted(true);
      clearCart();
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F4F4F6] py-16 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
          <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold uppercase tracking-wide text-black mb-2">¡Pedido Registrado!</h2>
          <p className="text-xs text-gray-600 mb-6">
            Gracias <strong>{clientName}</strong>. Tu comprobante ha sido enviado a validación.
          </p>

          <div className="bg-gray-50 p-4 rounded text-left text-xs mb-6 space-y-2 border border-gray-200">
            <p><strong>Nº Pedido:</strong> #{orderId}</p>
            <p><strong>Total USD:</strong> ${totalUSD.toFixed(2)}</p>
            <p><strong>Total VES:</strong> {totalVES.toFixed(2)} Bs.</p>
            {reference && <p><strong>Referencia:</strong> {reference}</p>}
            <p><strong>Estatus:</strong> <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Pendiente Validación</span></p>
          </div>

          <Link href="/" className="inline-block w-full bg-[#0D0D0D] text-white text-xs font-bold py-3 uppercase tracking-wider rounded hover:bg-zinc-800 transition-colors">
            Volver a la Tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F4F6] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
        <Link href="/" className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-black mb-6 uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-1" /> Volver al Catálogo
        </Link>

        <h2 className="text-2xl font-bold uppercase tracking-tight text-black mb-1">Módulo de Pago Híbrido</h2>
        <p className="text-xs text-gray-500 mb-6">Transacciones ajustadas a Tasa Oficial BCV ({bcvRate.toFixed(2)} Bs./USD)</p>

        <div className="bg-[#0D0D0D] text-white p-4 rounded-lg mb-6 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-400 block uppercase">Total a Liquidar</span>
            <span className="text-lg font-bold">${totalUSD.toFixed(2)} USD</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-400 block uppercase">Equivalente Oficial BCV</span>
            <span className="text-lg font-bold text-emerald-400">{totalVES.toFixed(2)} Bs.</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Nombre Completo *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
                placeholder="Ej. Carlos Mendoza"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Teléfono WhatsApp *</label>
              <input
                type="tel"
                required
                value={clientPhone}
                onChange={e => setClientPhone(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
                placeholder="Ej. 04141234567"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Método de Pago *</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'pagomovil', label: 'Pago Móvil', icon: Smartphone },
                { id: 'zelle', label: 'Zelle / USD', icon: DollarSign },
                { id: 'transfer', label: 'Transferencia', icon: Landmark },
                { id: 'cash', label: 'Taquilla / Cash', icon: QrCode },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMethod(item.id as any)}
                    className={`p-3 border rounded text-center flex flex-col items-center justify-center transition-all ${
                      method === item.id ? 'border-black bg-[#0D0D0D] text-white' : 'border-gray-200 bg-white text-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-1" />
                    <span className="text-xs font-bold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 text-xs text-gray-700 space-y-1">
            {method === 'pagomovil' && (
              <>
                <p className="font-bold text-black mb-1">Datos Pago Móvil:</p>
                <p>• Banco: Banco de Venezuela (0102)</p>
                <p>• RIF: J-000000000 | Teléfono: 0412-0000000</p>
                <p className="font-bold text-emerald-700 mt-2">Monto exacto: {totalVES.toFixed(2)} Bs.</p>
              </>
            )}
            {method === 'zelle' && (
              <>
                <p className="font-bold text-black mb-1">Datos Zelle:</p>
                <p>• Email: pagos@museodebellasartes.gob.ve</p>
                <p>• Titular: Fundación Museo de Bellas Artes</p>
                <p className="font-bold text-emerald-700 mt-2">Monto exacto: ${totalUSD.toFixed(2)} USD</p>
              </>
            )}
            {method === 'transfer' && (
              <>
                <p className="font-bold text-black mb-1">Cuenta Corriente BNC:</p>
                <p>• Nº: 0191-0000-00-0000000000</p>
                <p>• Titular: Museo de Bellas Artes | RIF: J-000000000</p>
                <p className="font-bold text-emerald-700 mt-2">Monto exacto: {totalVES.toFixed(2)} Bs.</p>
              </>
            )}
            {method === 'cash' && (
              <>
                <p className="font-bold text-black mb-1">Pago en Taquilla Principal (USD / VES):</p>
                <p>• Presentar código QR o número de pedido en el Museo de Bellas Artes.</p>
              </>
            )}
          </div>

          {method !== 'cash' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Nº Referencia *</label>
                <input
                  type="text"
                  required
                  value={reference}
                  onChange={e => setReference(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
                  placeholder="Ej. 984021"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Comprobante de Pago</label>
                <div className="flex items-center border border-gray-300 rounded px-3 py-1.5 bg-white">
                  <Upload className="w-4 h-4 mr-2 text-gray-400" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={e => setReceipt(e.target.files?.[0] || null)}
                    className="text-xs text-gray-500 w-full"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#0D0D0D] text-white font-bold py-3 text-xs uppercase tracking-widest rounded hover:bg-zinc-800 transition-colors"
          >
            Confirmar y Registrar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}