import CategoryView from '@/views/CategoryView/CategoryView'
import React from 'react'

const categoryProducts = ({params}: {params: {categoryId: string}}) => {
  return (
    <div>
      <CategoryView {...params} />
    </div>
  )
}

export default categoryProducts
