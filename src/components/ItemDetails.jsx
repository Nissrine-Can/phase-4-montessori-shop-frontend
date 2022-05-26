import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import BuyNowModal from './BuyNowModal'


const ItemDetails = ({ 
      onBuyItem, 
      selectedItem,
      setSelectedItem,
      backToItems,
      cartItems, 
      addFavorite,
      removeFavorite,
      currentUser
      }
      ) => {
        
        const {id} = useParams()
        

        useEffect(() => {
          fetch(`/items/${id}`)
              .then(resp => resp.json())
              .then((selectedItem) => {
                setSelectedItem(selectedItem)
              
              })
        }, [id, setSelectedItem])   
      
 return (
    <div>
    {selectedItem ? 
    <Grid>
          <Grid.Column mobile={16} computer={4}>
              <Image src={selectedItem.image} alt={selectedItem.name} />
              <br />
              <div >
                <Icon onClick={() => addFavorite(selectedItem) } color="red" name="heart outline" />
              </div>
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
             <BuyNowModal 
                cartItems={cartItems} 
                onBuyItem={onBuyItem} 
                selectedItem={selectedItem}
                  />
                  <br />
                  <br />
                  <br />
                  <div>
                   
                </div>
        </Grid.Column>
        </Grid>
     : <h2>Loading...</h2>}
        
    </div>
  )
}

export default ItemDetails