import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
const ItemCard = ({ item, removeFavorite, redHeart }) => {

  const navigate = useNavigate()

  const handleClick = () => {
      navigate(`/items/${item.id}`)
  }

   return (
    <div className="item-card">
        <Card color='blue' >
     
        <div onClick={handleClick} className="image" >
          <Image as="a" src={item.image} alt={item.name} wrapped />     
         </div>
         
           <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>{item.price}</Card.Description>
               
            </Card.Content>
            <br />
            {redHeart ? (
              <span onClick={() => removeFavorite(item)}>
                <Icon color="red" name="heart" />
              </span>
            ) : null }
        </Card>
    </div>
  )
}

export default ItemCard