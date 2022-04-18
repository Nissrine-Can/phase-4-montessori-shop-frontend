import React from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from '../components/ItemCard'


const ItemsContainer = ({ items }) => {

  
 return (
    <div className="items-container">
        <Card.Group itemsPerRow={3}>
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
        </Card.Group>
    </div>
  )
}

export default ItemsContainer