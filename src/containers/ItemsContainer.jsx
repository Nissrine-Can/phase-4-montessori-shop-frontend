import React from 'react'
import ItemCard from '../components/ItemCard'


const ItemsContainer = ({ items }) => {

    const itemList = items.map((item) => <ItemCard key={item.id} />)
  return (
    <div>{itemList}</div>
  )
}

export default ItemsContainer