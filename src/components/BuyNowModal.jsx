import React from 'react'
import { Modal, Button } from 'semantic-ui-react'


const BuyNowModal = ({ 
    onAddToCart,
    selectedItem 
  }) => {
  
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(false)
        onAddToCart(selectedItem)
    }

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
      <Button color="yellow">
          { selectedItem.status }
      </Button>
    }
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Thank you for your purchase!
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClick}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default BuyNowModal