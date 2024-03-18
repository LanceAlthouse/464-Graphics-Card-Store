const GraphicsCards = [
  {
    id: 1,
    image: 'https://images.evga.com/products/gallery/png/12G-P5-3657-KR_LG_2.png',
    name: 'EVGA GeForce RTX 3060 XC GAMING',
    price: 329.99,
  },
  {
    id: 2,
    image: 'https://images.evga.com/products/gallery/png/12G-P5-3657-KR_LG_2.png',
    name: 'EVGA GeForce RTX 3060 Ti XC GAMING',
    price: 399.99,
  },
  {
    id: 3,
    image: 'https://images.evga.com/products/gallery/png/08G-P5-3767-KR_LG_2.png',
    name: 'EVGA GeForce RTX 3070 XC GAMING',
    price: 499.99,
  },
  {
    id: 4,
    image: 'https://images.evga.com/products/gallery/png/08G-P5-3767-KR_LG_2.png',
    name: 'EVGA GeForce RTX 3070 Ti XC GAMING',
    price: 599.99,
  },
  {
    id: 5,
    image: 'https://images.evga.com/products/gallery/png/24G-P5-3973-KR_LG_3.png',
    name: 'EVGA GeForce RTX 3080 XC3 GAMING',
    price: 699.99,
  },
  {
    id: 6,
    image: 'https://images.evga.com/products/gallery/png/24G-P5-3973-KR_LG_3.png',
    name: 'EVGA GeForce RTX 3080 Ti XC3 GAMING',
    price: 799.99,
  },
  {
    id: 7,
    image: 'https://images.evga.com/products/gallery/png/08G-P5-3667-KR_LG_3.png',
    name: 'EVGA GeForce RTX 3090 XC3 GAMING',
    price: 899.99,
  },
  {
    id: 8,
    image: 'https://images.evga.com/products/gallery/png/08G-P5-3667-KR_LG_3.png',
    name: 'EVGA GeForce RTX 3090 Ti XC3 GAMING',
    price: 999.99,
  },
  {
    id: 9,
    image: 'https://images.evga.com/products/gallery/png/06G-P4-1163-KR_LG_3.png',
    name: 'EVGA GeForce GTX 1660 XC GAMING',
    price: 209.99,
  },
  {
    id: 10,
    image: 'https://images.evga.com/products/gallery/png/06G-P4-1161-KR_LG_3.png',
    name: 'EVGA GeForce GTX 1660 Ti XC GAMING',
    price: 259.99,
  },
  {
    id: 11,
    image: 'https://images.evga.com/products/gallery/png/06G-P4-1261-KR_LG_3.png',
    name: 'EVGA GeForce GTX 1660 Super XC GAMING',
    price: 279.99,
  },
];

GraphicsCards.sort((a, b) => a.price - b.price);

export default GraphicsCards;
