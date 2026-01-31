// types/store.ts
export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "IronCore Pro Hoodie",
    price: "$65.00",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Elite Whey Isolate",
    price: "$49.99",
    category: "Supplements",
    image: "https://images.unsplash.com/photo-1593095122571-c03532439a51?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Performance Grip Gloves",
    price: "$25.00",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80",
  },
];