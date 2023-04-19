import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Product } from '../../app/types/product'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import agent from '../../app/api/agent'
import { LoadingButton } from '@mui/lab'

type Props = {
    product: Product
}

const ProductCard = ({product}: Props) => {
  const [loading, setLoading] = useState(false)

  const handleAddItem = (productId: number) => {
    setLoading(true)
    agent.Basket.addItem(productId)
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: 'secondary.main'}}>
            {product.name[0]}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: {fontWeight: 'bold', color:'primary.main'}
        }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          £{(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}, {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
        loading={loading}
        onClick={() => handleAddItem(product.id)}
        size="small"
        variant="contained"
        >
          Add to cart
        </LoadingButton>
        <Button size="small" component={Link} to={`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard