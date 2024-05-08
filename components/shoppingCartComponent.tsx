import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline, ShoppingCart } from '@mui/icons-material'
import { Product } from '../utils/interfaces';
import useShoppingCartStore from '../utils/productStore';

const ShoppingProducts = () => {
  const { cartProduts, addProductCart, removeOneItemQtd, addOneItemQtd, removeProductCart, clearCart, allProducts, allProductos } = useShoppingCartStore();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    allProducts();
  }, []);


  const searchProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
  }

  const filterProduct = allProductos.filter((product) =>
    product.title.includes(searchProduct)
  )

  useEffect(() => {
    const totalItemsProducts = cartProduts.reduce((total, item) => total + (item.quantity ?? 0), 0);
    setTotalItems(totalItemsProducts);
  }, [cartProduts])

  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }


  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom>
        Shopping Cart StackTechnology
      </Typography>
      <TextField
        id='inputProduct'
        label="Buscar Produto"
        variant="outlined"
        value={searchProduct}
        onChange={searchProductChange}
        fullWidth
        sx={{ marginBottom: 2 }} />
      <Grid container spacing={2}>
        {searchProduct && allProducts ? filterProduct.map((item: Product) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={item.images[0]}
                />
                <Typography>{item.title}</Typography>
                <Typography>Price: $ {item.price}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => addProductCart(item)}>Adicionar ao Carrinho</Button>
              </CardActions>
            </Card>
          </Grid>
        )) :

          filterProduct.map((item: Product) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardContent>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={item.images[0]}
                  />
                  <Typography>{item.title}</Typography>
                  <Typography>Price: $ {item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => addProductCart(item)}>Adicionar ao Carrinho</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      <Drawer anchor='right' open={isDrawerOpen} onClose={closeDrawer}>
        <List>
          {cartProduts.map((item: Product) => (
            <ListItem>
              <CardMedia
                component="img"
                alt={item.title}
                image={item.images[0]}
                style={{ width: 100, height: 100, marginRight: 10 }} />
              <ListItemText primary={item.title} secondary={`Price: $${item.price} - Quantity: ${item.quantity}`} />
              <IconButton
                edge="end"
                aria-label="decrease"
                className='button_remove_qtd_item'
                onClick={() => removeOneItemQtd(item.id)}>
                <RemoveCircleOutline />
              </IconButton>
              <IconButton>
                <IconButton
                  edge="end"
                  aria-label="increase"
                  className='button_add_qtd_item'
                  onClick={() => addOneItemQtd(item.id)} >
                  <AddCircleOutline />
                </IconButton>
              </IconButton>
              <Button onClick={() => removeProductCart(item.id)}>Excluir</Button>
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            <ListItemText primary={`Total de Itens: ${totalItems}`} />
          </ListItem>
          <Button onClick={clearCart}>Limpar Carrinho</Button>
        </List>
      </Drawer>
      <Button
        variant="contained"
        color='primary'
        startIcon={<ShoppingCart />}
        onClick={openDrawer}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        className='cart'>
        Carrinho ({totalItems})
      </Button>
    </Container>
  );
}
export default ShoppingProducts;
