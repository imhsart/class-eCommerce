const products = [
  {
    id: 1,
    image: "../assets/iphone-15.jpg",
    name: "iPhone 15",
    modelNumber: "APL-IP15-128",
    description: "Apple iPhone 15 features a powerful A16 Bionic chip for smooth performance. It comes with 128GB storage for apps, photos, and videos. The device offers a premium design with an advanced camera system and long-lasting battery life.",
    quantity: 15,
    price: 850.95
  },
  {
    id: 2,
    image: "../assets/galaxy-s24.jpg",
    name: "Samsung Galaxy S24",
    modelNumber: "SMS-S24-256",
    description: "Samsung Galaxy S24 is a flagship smartphone with powerful performance and a stunning display. It includes 256GB storage for storing files, media, and applications. The phone delivers excellent camera quality and AI-powered features.",
    quantity: 12,
    price: 903.95,
    sale: true,
    oldPrice: 1010.99
  },
  {
    id: 3,
    image: "../assets/macbook-air.jpg",
    name: "MacBook Air M3",
    modelNumber: "APL-MBA-M3",
    description: "MacBook Air M3 is a lightweight laptop designed for speed and efficiency. Powered by Apple's M3 chip, it handles multitasking and creative work effortlessly. It features a sleek design with impressive battery performance.",
    quantity: 8,
    price: 1229.00
  },
  {
    id: 4,
    image: "../assets/sony-headphones.jpg",
    name: "Sony WH-1000XM5",
    modelNumber: "SNY-WHXM5",
    description: "Sony WH-1000XM5 headphones provide premium sound quality with advanced noise cancellation. They offer a comfortable wireless experience for music, calls, and entertainment. The headphones include long battery life and a stylish modern design.",
    quantity: 20,
    price: 265.99,
    sale: true,
    oldPrice: 319.95
  },
  {
    id: 5,
    image: "../assets/mens-hoodie.jpg",
    name: "Men's Classic Hoodie",
    modelNumber: "CLT-HDY-001",
    description: "A comfortable cotton-blend hoodie designed for everyday casual wear. It provides a soft feel with a relaxed fit for maximum comfort. The classic style makes it suitable for different seasons and occasions.",
    quantity: 25,
    price: 15.99
  },
  {
    id: 6,
    image: "../assets/womens-jacket.jpg",
    name: "Women's Denim Jacket",
    modelNumber: "CLT-JKT-002",
    description: "A stylish denim jacket featuring a modern slim-fit design. It is made with durable fabric while maintaining a comfortable feel. Perfect for layering with casual outfits throughout the year.",
    quantity: 18,
    price: 27.95,
    sale: true,
    oldPrice: 32.99
  },
  {
    id: 7,
    image: "../assets/casual-tshirt.jpg",
    name: "Unisex Graphic T-Shirt",
    modelNumber: "CLT-TSH-003",
    description: "A soft cotton t-shirt featuring a minimalist graphic print design. It offers a comfortable fit suitable for daily casual use. The lightweight fabric makes it ideal for all-day wear.",
    quantity: 40,
    price: 9.95
  },
  {
    id: 8,
    image: "../assets/running-shorts.jpg",
    name: "Athletic Running Shorts",
    modelNumber: "CLT-SRT-004",
    description: "Lightweight running shorts designed for sports and workout activities. The breathable fabric helps provide comfort during intense movement. They offer flexibility and a practical design for active lifestyles.",
    quantity: 30,
    price: 10.99,
    sale: true,
    oldPrice: 13.95
  }
];

export default products