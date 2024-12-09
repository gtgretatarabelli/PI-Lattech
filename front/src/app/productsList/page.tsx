import CardList from '@/components/CardList/CardList';
import Categories from '@/components/Categories/Categories';
import React from 'react'

const productsList = () => {
  return (
    <div>
      <Categories/>
      <CardList/>
    </div>
  )
}

export default productsList;
