import { getProductDB } from '@/helpers/products.helpers'
import { IProduct } from '@/interfaces/Iproduct'
import { Card } from '../card/Card'
import Link from 'next/link'
import React from 'react'

const ProductsCategory: React.FC = async () => {

    try {
        const products: IProduct[] = await getProductDB()
        const categoryProducts = products.filter(product => product.categoryId === 1)

        return (
            <div className=" justify-center ">
                <h2 className=" text-base sm:text-lg text-center  font-bold my-5">Comprar un iPhone</h2>
                <p className=" text-base sm:text-lg text-center  font-bold my-2">Elige el tuyo.</p>
                <div className="flex flex-wrap justify-center gap-8  ">
                    {
                        categoryProducts.length > 0 ? (
                            categoryProducts.map((product) => (
                                <Link href={`/products/${product.id}`} key={product.id}>
                                    <Card {...product} />
                                </Link>
                            ))
                        ) : (
                            <p>No hay productos en esta categoría.</p>
                        )
                    }
                </div>
            </div>
        )

    } catch (error) {
        return <div>Error al cargar los productos.</div>;
    }
}

export default ProductsCategory
