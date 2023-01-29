import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




const CustomCard = (props) => {
  return (
    <Card sx={{ width: 345, margin:2 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="300"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="ul" color="text.secondary">
                <li>Species: {props.species}</li>
                <li>Gender: {props.gender}</li>
                <li>Origin: {props.origin}</li>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default CustomCard