import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ItemCard = ({ item, itemSelected }) => {
  const handleClick = () => {
    itemSelected(item.id)
  }
  return (
    <div className="item-card">
        <Card color='blue' >
      
        <div className="image" onClick={handleClick}>
           <Image src={item.image} alt={item.name} wrapped />     
            </div>
           
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>{item.price}</Card.Description>
                <span style={{paddingLeft: "240px"}}><Icon bordered name="add to cart" color="blue" area-label="add to cart"/></span>
            </Card.Content>
        </Card>
    </div>
  )
}

export default ItemCard