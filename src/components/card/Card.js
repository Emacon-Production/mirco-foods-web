import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardComponent = ({ majorProduct, thumbnail }) => {
  return (
    <Card sx={{ width: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={thumbnail}
                alt="green iguana"
            />

            <CardContent>
                <Typography gutterBottom variant='h5' component="div" className=''>
                    {majorProduct}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default CardComponent