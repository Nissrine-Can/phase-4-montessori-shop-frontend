import React, { useEffect} from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard'


const PurchasedItems = ({ purchasedItems, fetchPurchasedItems }) => {
    useEffect(() => {
        fetchPurchasedItems()
    }, [])
  return (
    <div className="items-container" style={{padding: '20px', marginBottom: '500px'}}>
        {purchasedItems.length === 0 ? <h2 style={{padding: '150px', textAlign: 'center'}}>You have no purchased items!</h2> :
        <>
            <h2>Your purchased items:</h2>
            <Card.Group itemsPerRow={3}>
                    {purchasedItems.map((purchasedItem) => (
                    <div key={purchasedItem.id} >
                    <ItemCard
                    item={purchasedItem} 
                    />
                    </div>
                    ))}
            </Card.Group>
        </>
        }
    </div>
    
  
  )
}

export default PurchasedItems