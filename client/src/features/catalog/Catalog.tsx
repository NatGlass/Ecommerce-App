import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { Product } from '../../app/types/product'
import ProductList from './ProductList';

export type Props = {
    products: Product[];
    addProduct: () => void;
}

const Catalog = ({products, addProduct}: Props) => {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </>
  )
}

export default Catalog