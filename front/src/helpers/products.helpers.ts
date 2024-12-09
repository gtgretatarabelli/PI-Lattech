import { IProduct } from "@/interfaces/Iproduct";
import { error } from "console";

const APIURL: string = process.env.NEXT_PUBLIC_API_URL as string;

export async function getProductDB(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${APIURL}/products`, {
            next: { revalidate: 1200 }
        });

        const products: IProduct[] = await response.json();  // Convertir la respuesta a JSON
        return products;  // Devolver la lista de productos
    } catch (error: any) {
        console.error('Error fetching products:', error);
        throw new Error(error);  // Manejar errores si la solicitud falla
    }
}

export async function getProductById(id: string): Promise<IProduct> {
    try {
        const products: IProduct[] = await getProductDB();

        const productFilter = products.find((product) => product.id.toString() === id);

        if (!productFilter) {
            throw new Error(`Producto con ID ${id} no encontrado`);
        }

        return productFilter;
    } catch (error: any) {
        throw new Error(`Error al obtener el producto con ID ${id}: ${error.message}`);
    }
}

