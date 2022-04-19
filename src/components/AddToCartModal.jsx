import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

const AddToCartModal = ({ onAddToCart }) => {
  
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(false)
        onAddToCart()
    }

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
      <Button>
          Add To Cart
      </Button>
    }
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Item is added to your cart!
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClick}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AddToCartModal