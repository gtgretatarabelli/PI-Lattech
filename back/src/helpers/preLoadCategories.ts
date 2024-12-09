import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    id:number;
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Tablets' },
    { id: 4, name: 'Headphones' },
    { id: 5, name: 'Apple Watch' },
    { id: 6, name: 'Printers' },
    { id: 7, name: 'Monitors' },
    { id: 8, name: 'Storage' },
    { id: 9, name: 'Accessories' }
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
}