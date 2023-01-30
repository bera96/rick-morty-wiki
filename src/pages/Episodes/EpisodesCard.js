import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const EpisodesCard = (props) => {
    const navigate = useNavigate()

      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.date}
            </Typography>
            <Typography variant="h5" component="div">
              {props.episode + " " + props.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>navigate(`${props.episodeID}`)}>Learn More</Button>
          </CardActions>
        </React.Fragment>
      );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card sx={{ width: 345, margin:2, height:200 }} variant="outlined">{card}</Card>
    </Box>
  )
}

export default EpisodesCard