import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'semantic-ui-react'


const Account = () => {

 const navigate = useNavigate()

    const handleClick = () => {
        navigate("/listings")
    }
    const handleClickPurchased = () => {
      navigate("/purchased_items")
    }

  return (
    <>
    <div style={{padding: '100px', marginBottom:'400px'}}>
    <div>
        <Button color="orange" onClick={handleClick}>Listings</Button>
    </div>
    <br />
    <br />
    <div>
        <Button   color="olive" onClick={handleClickPurchased}>Purchased Items</Button>
    </div>
    </div>

    </>

  )
}

export default Account