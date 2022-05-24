import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'
import ItemCard from './ItemCard'

const Listings = ({ startEditing, handleDeleteListing, listings, fetchListings }) => {
                                
useEffect(() =>{
        fetchListings()
    }, [])

return (
    
    <div className="items-container">
        {listings? 
            <Card.Group itemsPerRow={3}>
            {listings.map((listing) => (
            <div>
            <ItemCard
             key={listing.id} 
             item={listing} 
              />
             <Link to={`/items/${listing.id}/edit`}>
                 <Button 
                 color="red" 
                 onClick={() => startEditing(listing)}
                 >Edit Item</Button>
                </Link>
                   <Button 
                   onClick={() => {
                     fetch(`/listings/${listing.id}`,{
                        method: "DELETE"
                     })  
                    handleDeleteListing(listing.id)
                     }} 
                   color="red" 
                   >Delete Item</Button>
              </div>
            ))}
        </Card.Group>
        : <h2>Loading...</h2>}
    </div>
    
  )
}

export default Listings