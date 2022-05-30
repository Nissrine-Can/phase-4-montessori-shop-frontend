import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'
import ItemCard from './ItemCard'

const Listings = ({ startEditing, handleDeleteListing, listings, fetchListings }) => {
                                
useEffect(() =>{
        fetchListings()
    }, [])

return (
    
    <div className="items-container" style={{padding: '20px', marginBottom: '400px'}}>
        {listings.length !== 0 ? 
           <>
           <h2>Your listings: </h2>
            <Card.Group itemsPerRow={3}>
            {listings.map((listing) => (
            <div key={listing.id}>
            <ItemCard 
             item={listing} 
              />
              <div style={{paddingLeft: '50px'}}>
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
              </div>
            ))}
        </Card.Group>
        </>
        : <h2 style={{padding: '150px', textAlign: 'center'}}>You have no listed items yet!</h2>}
    </div>
    
  )
}

export default Listings