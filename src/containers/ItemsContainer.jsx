import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import Search from '../components/Search'
import Filter from '../components/Filter'
import ItemCard from '../components/ItemCard'

const ItemsContainer = ({ 
    searchItems, 
    filterItems,
    items,
    addFavorite,
    removeFavorite,
    currentUser, 
    
}) => {
 
    

return (
    <div>
        <Container>
            <br />
            <h2>Our Inventory</h2>
            <br />
            <Search searchItems={searchItems} />
            <Filter items={items} filterItems={filterItems} />
            <br />
        
            <div className="items-container">
            <Card.Group itemsPerRow={3}>
            {items.map((item) => (
            <ItemCard
             key={item.id} 
             item={item} 
             addFavorite={addFavorite}
             removeFavorite={removeFavorite}
             currentUser={currentUser}
             redHeart={false}
             />
            ))}
        </Card.Group>
    </div>
            
         </Container>
    </div>
  )
}

export default ItemsContainer