
import React from 'react'
import Encabezado from "../../components/Encabezado/Encabezado"
import Categories from "@/components/Categories/Categories"
import AppleWatch from "@/components/AppleWatch/AppleWatch"
import Contact from "@/components/Contact/Contact"
import ProductsCategory from '@/components/ProductsCategory/ProductsCategory'

const HomeContainer = () => {
  return (
    <div>
      <Encabezado />
      <Categories />
      <ProductsCategory />
      <AppleWatch />
      <Contact />

    </div>
  )
}

export default HomeContainer;



