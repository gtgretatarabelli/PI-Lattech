import { Card } from "@/components/card/Card";
import { getProductDB } from "@/helpers/products.helpers";
import Link from "next/link";
import React, { useEffect } from "react";

const CardList: React.FC = async () => {
  try {
    const product = await getProductDB();
    return (
      <div className="flex flex-wrap items-center gap-4">
        {product &&
          product?.map((product) => {
            return (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card  {...product} />
              </Link>
            )
          })}
      </div>
    );
  } catch (error) {
    return <div>Error al cargar los productos</div>;
  }
};

export default CardList;
