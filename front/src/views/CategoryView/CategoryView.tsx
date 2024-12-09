"use client"

import { Card } from '@/components/card/Card';
import { getProductDB } from '@/helpers/products.helpers';
import { IProduct } from '@/interfaces/Iproduct';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CategoryView: React.FC<CategoryViewProps> = ({ categoryId }) => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getProductDB();
                const filteredProducts = productData.filter((product) => product.categoryId === Number(categoryId))
                if (filteredProducts.length > 0) {
                    setProducts(filteredProducts);

                }
            } catch (error) {
                console.error("Error al cargar los productos", error);
                alert("Error al cargar los productos");
            }
        };
        if (categoryId) {
            fetchData();
        }
    }, [categoryId]);

    return (
        <div className="flex flex-wrap justify-center gap-8  ">
            {
                products.length > 0 ? (
                    products.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <Card {...product} />
                        </Link>
                    ))
                ) : (
                    <p>No hay productos en esta categoría.</p>
                )
            }
        </div>
    )
}

export default CategoryView;


