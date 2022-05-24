import React, { useEffect} from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard'


const PurchasedItems = ({ purchasedItems, fetchPurchasedItems }) => {
    useEffect(() => {
        fetchPurchasedItems()
    }, [])
  return (
    <div className="items-container">
        {purchasedItems ? 
            <Card.Group itemsPerRow={3}>
            {purchasedItems.map((purchasedItem) => (
            <div>
            <ItemCard
             key={purchasedItem.id} 
             item={purchasedItem} 
              />
            </div>
            ))}
        </Card.Group>
        : <h2>Loading...</h2>}
    </div>
    
  
  )
}

export default PurchasedItems