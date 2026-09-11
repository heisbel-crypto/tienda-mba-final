import React from 'react';
import { CartProvider } from '../context/CartContext';

export const metadata = {
  title: 'Tienda MBA',
  description: 'Catálogo oficial del Museo de Bellas Artes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Carga Tailwind CSS desde CDN para garantizar el diseño limpio sin errores de importación de archivos */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
