import React from 'react';
import { CartProvider } from '../context/CartContext';

export const metadata = {
  title: 'Tienda MBA',
  description: 'Catálogo oficial de productos del Museo de Bellas Artes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
