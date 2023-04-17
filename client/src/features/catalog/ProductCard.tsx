import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Product } from '../../app/types/product'

type Props = {
    product: Product
}

const ProductCard = ({product}: Props) => {
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
        <Button size="small" variant="contained">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard