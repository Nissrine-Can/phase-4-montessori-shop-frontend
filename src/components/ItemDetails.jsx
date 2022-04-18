import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Grid, Image, Button } from 'semantic-ui-react'
import AddToCartModal from './AddToCartModal'


const ItemDetails = () => {
 
    const [selectedItem, setSelectedItem] = useState("")
    const params = useParams().id 

    useEffect(() => {
        fetch(`/items/${params}`)
        .then(resp => resp.json())
        .then(data => setSelectedItem(data))
    }, [params])

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
             <Link to={"/items"}>
               <Button >Back To All Items</Button>
            </Link>
               <br />
               <br />
               <br />
             <AddToCartModal />
        </Grid.Column>
        </Grid>
    </div>
  )
}

export default ItemDetails