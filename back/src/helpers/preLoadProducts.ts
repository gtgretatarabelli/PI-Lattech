import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://i.pinimg.com/564x/da/db/d6/dadbd6316422e3e2a78b6f6f30b6e232.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://i.pinimg.com/564x/4c/89/c9/4c89c93767d1ab62a8e64864d6d6df5c.jpg",
    categoryId: 2,
    
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://i.pinimg.com/736x/79/96/e7/7996e76e5e2bc02a40cfe8a259753eb5.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://i.pinimg.com/564x/e8/3f/c7/e83fc71ae27dd9a5f3d8fe3d9b33effd.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://i.pinimg.com/564x/36/d8/9c/36d89c9ded869ddcaf8a77d22133db90.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://i.pinimg.com/564x/1b/52/39/1b5239925db22a8f97dd094ff11bfbdc.jpg",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "iPhone 12",
    price: 800,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://i.pinimg.com/564x/da/db/d6/dadbd6316422e3e2a78b6f6f30b6e232.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "iPhone 13",
    price: 900,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://i.pinimg.com/564x/da/db/d6/dadbd6316422e3e2a78b6f6f30b6e232.jpg",
    categoryId: 1,
    stock: 17,
  },
  {
    name: "iPhone 14",
    price: 1050,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://i.pinimg.com/564x/da/db/d6/dadbd6316422e3e2a78b6f6f30b6e232.jpg",
    categoryId: 1,
    stock: 1,
  },
  
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
