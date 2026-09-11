'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle, XCircle, RefreshCw, Package } from 'lucide-react';

interface Order {
  id: string;
  clientName: string;
  clientPhone: string;
  method: string;
  reference: string;
  totalUSD: number;
  totalVES: number;
  status: 'Pending Validation' | 'Paid' | 'Shipped' | 'Rejected';
}

export default function AdminDashboard() {
  const { bcvRate, setBcvRate, products } = useCart();
  const [rateInput, setRateInput] = useState(bcvRate.toString());
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'MBA-492019',
      clientName: 'María Pérez',
      clientPhone: '04121234567',
      method: 'Pago Móvil',
      reference: '883920',
      totalUSD: 85.00,
      totalVES: 3102.50,
      status: 'Pending Validation'
    }
  ]);

  const updateStatus = (id: string, newStatus: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const handleRateUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setBcvRate(parseFloat(rateInput));
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-[#0D0D0D] text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wider">Panel de Administración MBA</h1>
            <p className="text-xs text-gray-400">Verificación de pagos e inventario de la Colección Ben Abounassif</p>
          </div>

          <form onSubmit={handleRateUpdate} className="mt-4 md:mt-0 flex items-center space-x-2 bg-zinc-800 p-2 rounded">
            <span className="text-xs font-semibold text-gray-300">Tasa BCV (Bs):</span>
            <input
              type="number"
              step="0.01"
              value={rateInput}
              onChange={e => setRateInput(e.target.value)}
              className="w-20 bg-zinc-900 border border-zinc-700 text-white px-2 py-1 text-xs rounded focus:outline-none"
            />
            <button type="submit" className="bg-white text-black p-1 rounded hover:bg-gray-200">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-200 font-bold text-xs uppercase tracking-wider bg-gray-50 text-black">
            Verificación de Pagos Entrantes
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-100 text-gray-600 border-b border-gray-200 uppercase">
                <tr>
                  <th className="p-3">ID Pedido</th>
                  <th className="p-3">Cliente</th>
                  <th className="p-3">Método</th>
                  <th className="p-3">Referencia</th>
                  <th className="p-3">Monto ($ / Bs)</th>
                  <th className="p-3">Estatus</th>
                  <th className="p-3 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="p-3 font-bold">{order.id}</td>
                    <td className="p-3">{order.clientName} <br/><span className="text-gray-400">{order.clientPhone}</span></td>
                    <td className="p-3">{order.method}</td>
                    <td className="p-3 font-mono">{order.reference}</td>
                    <td className="p-3 font-bold">${order.totalUSD.toFixed(2)} / {order.totalVES.toFixed(2)} Bs.</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                        order.status === 'Pending Validation' ? 'bg-amber-100 text-amber-800' :
                        order.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-1">
                      <button onClick={() => updateStatus(order.id, 'Paid')} className="p-1 text-emerald-600 hover:bg-emerald-50 rounded" title="Aprobar Pago">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button onClick={() => updateStatus(order.id, 'Rejected')} className="p-1 text-red-600 hover:bg-red-50 rounded" title="Rechazar Pago">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-200 font-bold text-xs uppercase tracking-wider bg-gray-50 text-black flex justify-between items-center">
            <span>Inventario de Productos ({products.length})</span>
            <Package className="w-4 h-4 text-gray-500" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-100 text-gray-600 border-b border-gray-200 uppercase">
                <tr>
                  <th className="p-3">Producto</th>
                  <th className="p-3">Categoría</th>
                  <th className="p-3">Precio USD</th>
                  <th className="p-3">Stock Disponible</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-900">{product.title}</td>
                    <td className="p-3 text-gray-500">{product.category}</td>
                    <td className="p-3 font-bold">${product.priceUSD.toFixed(2)}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        product.stock < 10 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.stock} unidades
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}