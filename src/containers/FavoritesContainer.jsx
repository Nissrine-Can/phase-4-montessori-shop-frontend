import React from 'react'
import ItemCard from '../components/ItemCard'
import { Container, Card } from 'semantic-ui-react'


const Favorites = ({ favorites, removeFavorite }) => {
  return (
    <Container textAlign="center">
      <div>
        <h1>The items you liked!</h1>
      </div>
      <div className="ui divider">
        <Card.Group itemsPerRow={3}> 
          {favorites.map((item) => (
            
            <ItemCard 
             key={item.id}
             item={item}
             removeFavorite={removeFavorite}
             redHeart={true}
            />
          ))}

        </Card.Group>
      </div>
    </Container>
  )
}

export default Favorites