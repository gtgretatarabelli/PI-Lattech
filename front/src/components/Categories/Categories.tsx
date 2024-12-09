"use client";
import Link from "next/link";

const Categories: React.FC = () => {
  const categories = [
    { id: 1, name: "Smartphones", image: "https://i.pinimg.com/736x/6a/05/92/6a059214beeea7007a6ea93fe08e72d2.jpg" },
    { id: 2, name: "Laptops", image: "https://i.pinimg.com/564x/4c/eb/ef/4cebef6a7131bcaf63d707863bc49fdf.jpg" },
    { id: 3, name: "Tablets", image: "https://i.pinimg.com/474x/e7/d1/33/e7d133203aad728670e561747ded0068.jpg" },
    { id: 4, name: "Headphones", image: "https://i.pinimg.com/474x/ad/01/49/ad0149035ac7840b8ae9ce38942adce7.jpg" },
    { id: 5, name: "Apple Watch", image: "https://i.pinimg.com/564x/e8/3f/c7/e83fc71ae27dd9a5f3d8fe3d9b33effd.jpg" },
    { id: 6, name: "Printers", image: "https://i.pinimg.com/736x/59/c4/d8/59c4d83ee4ea4b3166498dfdc192f6c8.jpg" },
    { id: 9, name: "Accessories", image: "https://i.pinimg.com/564x/f2/76/b4/f276b4b9a37e9a55127fbccf30157eb9.jpg" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 my-8">
      {categories.map((category) => (
        <div key={category.id} className="text-center group transition duration-300 transform hover:scale-105">
          <Link href={`/category/${category.id}`}>
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4 mx-auto shadow-lg hover:shadow-xl">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{category.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
