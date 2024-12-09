import { ICategory } from "./ICategory";


export interface IProduct{
    id: number,
    name: string,
    description: string, 
    price: number,
    stock:number,
    image:string,
    categoryId: number,
    }
    
      