import { useState, useEffect } from 'react'
import Catalog from '../../features/catalog/Catalog'
import { Product } from '../types/product';
import Header from './Header';
import { Container, CssBaseline } from '@mui/material';


const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  const addProduct = () => {
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length + 100),
        brand: 'brand',
        description: 'product description',
        pictureUrl: 'http://picsum.photos/200',
      }])
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  )
}

export default App