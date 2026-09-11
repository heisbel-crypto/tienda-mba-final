export interface Product {
  id: number;
  title: string;
  category: string;
  priceUSD: number;
  description: string;
  materials: string;
  stock: number;
  image: string;
  kineticDetails: string;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Tote Bag Geométrico 'MBA'",
    category: "Accesorios",
    priceUSD: 25.00,
    description: "Bolso ecológico con patrón cinético impreso en serigrafía de alta definición.",
    materials: "Lona de algodón orgánico 100%",
    stock: 45,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
    kineticDetails: "Líneas paralelas que generan ilusión de movimiento al desplazar el cuerpo."
  },
  {
    id: 2,
    title: "Mochila de Viaje 'Óptica'",
    category: "Equipaje",
    priceUSD: 85.00,
    description: "Mochila urbana semirrígida con relieve cinético e impermeable.",
    materials: "Textil sintético repujado",
    stock: 18,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    kineticDetails: "Relieve tridimensional con sombra física dinámicamente variable."
  },
  {
    id: 3,
    title: "Calzado Urbano 'Estructura'",
    category: "Moda",
    priceUSD: 90.00,
    description: "Calzado deportivo de diseño ergonómico con capellada geométrica.",
    materials: "Suela de EVA y textil impreso",
    stock: 12,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    kineticDetails: "Patrón ortogonal de contraste op-art."
  },
  {
    id: 4,
    title: "Pañuelo de Seda 'Luz'",
    category: "Textil Fine Art",
    priceUSD: 65.00,
    description: "Pañuelo de seda natural con gradación cromática cinética.",
    materials: "100% Seda Natural",
    stock: 25,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
    kineticDetails: "Gradación de superposición refractiva según la caida del pliegue."
  },
  {
    id: 5,
    title: "Set de Posavasos Metálicos (6 pzs)",
    category: "Hogar",
    priceUSD: 40.00,
    description: "Set de 6 posavasos hexagonales con grabado láser de ilusión óptica.",
    materials: "Acero inoxidable cepillado",
    stock: 30,
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600",
    kineticDetails: "Patrón moiré generado por grabado milimétrico alternado."
  },
  {
    id: 6,
    title: "Taza de Café 'Relieve'",
    category: "Utensilios",
    priceUSD: 20.00,
    description: "Taza de cerámica mate con relieve tridimensional simétrico.",
    materials: "Cerámica gres con acabado mate",
    stock: 50,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
    kineticDetails: "Textura exterior háptica que juega con las luces directas."
  },
  {
    id: 7,
    title: "Lámpara de Escritorio 'Sombras de Luz'",
    category: "Iluminación",
    priceUSD: 110.00,
    description: "Lámpara articulada con pantalla troquelada que proyecta sombras geométricas.",
    materials: "Aluminio y acero",
    stock: 8,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    kineticDetails: "Proyección proyectiva envolvente en superficies cercanas."
  },
  {
    id: 8,
    title: "Camiseta 'Sutil Relieve'",
    category: "Indumentaria",
    priceUSD: 35.00,
    description: "Camiseta monocromática con relieve gofrado en el pecho.",
    materials: "Algodón peinado 100%",
    stock: 40,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600",
    kineticDetails: "Alto relieve térmico en retícula matemática."
  },
  {
    id: 9,
    title: "Monografía: Ben Abounassif - Geometrías Modulares",
    category: "Editorial",
    priceUSD: 50.00,
    description: "Libro de tapa dura con catálogo razonado y ensayos curatoriales.",
    materials: "Papel estucado 170g, Tapa dura",
    stock: 100,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
    kineticDetails: "Acabados con barniz UV sectorizado reflectivo."
  },
  {
    id: 10,
    title: "Grabado de Colección: 'Composición Binaria'",
    category: "Arte / Ed. Limitada",
    priceUSD: 220.00,
    description: "Serigrafía original firmada y numerada por la Fundación (Edición de 50).",
    materials: "Papel Algodón Fine Art 300g",
    stock: 5,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600",
    kineticDetails: "Impresión en tintas metálicas cinéticamente reactivas."
  },
  {
    id: 11,
    title: "Funda Protectora Smartphone 'Cinético'",
    category: "Tech",
    priceUSD: 18.00,
    description: "Case resistente con acabado en relieve táctil anti-deslizante.",
    materials: "Polímero de alta resistencia",
    stock: 60,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
    kineticDetails: "Patrón Lenticular cambiante según el ángulo de visión."
  },
  {
    id: 12,
    title: "Reloj de Pared Acrílico Modulado",
    category: "Decoración",
    priceUSD: 75.00,
    description: "Reloj de diseño con capas superpuestas de acrílico cortado en láser.",
    materials: "Acrílico fundido y maquinaria silenciosa",
    stock: 14,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600",
    kineticDetails: "Superposición de planos transparentes en rotación continua."
  },
  {
    id: 13,
    title: "Cuaderno de Arte Tapa Dura 'Gofrado'",
    category: "Papelería",
    priceUSD: 22.00,
    description: "Cuaderno para bocetos con textura geométrica en alto relieve.",
    materials: "Cubierta en vinil grabado, 120 págs",
    stock: 35,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600",
    kineticDetails: "Troquel de solapa de cierre con encaje geométrico."
  },
  {
    id: 14,
    title: "Porta-tarjetas Escultórico en Acero",
    category: "Escritorio",
    priceUSD: 30.00,
    description: "Organizador de escritorio en acero cepillado plegado en facetas dinámicas.",
    materials: "Acero inoxidable doblado",
    stock: 20,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600",
    kineticDetails: "Pliegues geométricos que refractan la luz de ambiente."
  },
  {
    id: 15,
    title: "Florero Cerámico de Relieve Modular",
    category: "Escultura Útil",
    priceUSD: 60.00,
    description: "Pieza cerámica cilíndrica esculpida con módulos tridimensionales.",
    materials: "Cerámica blanca satinada",
    stock: 9,
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600",
    kineticDetails: "Mapeo de sombra cambiante con iluminación rotativa."
  }
];