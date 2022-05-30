import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
const Footer = () => {
  return (
    <div>
    <Segment vertical>
      <Grid container textAlign="center">
       <Grid.Column>
          © 2022 Montessori Shop, LLC
       </Grid.Column>
      </Grid>
    </Segment>
    </div>
  )
}

export default Footer