import React from 'react'
import ItemCard from '../components/ItemCard'
import { Container, Card } from 'semantic-ui-react'

const Favorites = ({ favorites, removeFavorite }) => {

  return (
    <div style={{paddingTop: '100px', paddingBottom: '600px'}}>
    <Container textAlign="center">
      {favorites.length === 0 ? <h2 style={{ paddingTop: '50px' }}>You have no favorites!</h2> :
      <>
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
      </>
}
    </Container>
    </div>
  )
}

export default Favorites