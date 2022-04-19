import React from 'react'

import { Grid, Image, Button } from 'semantic-ui-react'
import AddToCartModal from './AddToCartModal'


const ItemDetails = ({ onAddToCart, selectedItem, backToItems }) => {
 
    
  return (
    <div>
        <Grid>
          <Grid.Column mobile={16} computer={4}>
              <Image src={selectedItem.image} alt={selectedItem.name} />
              <br />
          </Grid.Column>
          <Grid.Column mobile={16} computer={9}>
             <h1>{selectedItem.name}</h1>
             <h2>Price: {selectedItem.price}</h2>
             <h3>Age group: {selectedItem.categories}</h3>
             <h4>Description: {selectedItem.description}</h4>
             <br />
             <Button onClick={backToItems} >Back To All Items</Button>
            <br />
            <br />
             <AddToCartModal onAddToCart={onAddToCart} />
        </Grid.Column>
        </Grid>
    </div>
  )
}

export default ItemDetails