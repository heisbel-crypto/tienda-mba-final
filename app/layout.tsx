import React from 'react';
import './globals.css'; // Asegura la carga de estilos Tailwind
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
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
