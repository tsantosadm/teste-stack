import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline, ShoppingCart } from '@mui/icons-material'
import axios from 'axios';
import { Product } from '../utils/interfaces';
import { useQuery } from 'react-query';
import useShoppingCartStore from '../utils/productStore';

const ShoppingProducts = () => {
  const {cartProduts, addProductCart, removeOneItemQtd, addOneItemQtd} = useShoppingCartStore();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const listProducts = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products");
      const products: Product[] = response.data;
      return products;
    } catch (error) {
      console.error('Erro ao Listar Produtos: ', error);
    }
  }

  const { data: allProducts } = useQuery('products', listProducts)

  useEffect(() => {
    const totalItemsProducts = cartProduts.reduce((total, item) => total + (item.quantity ?? 0), 0);
    setTotalItems(totalItemsProducts);
  },[cartProduts])

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
        label="Buscar Produto"
        variant="outlined"
        value={""}
        fullWidth
        sx={{ marginBottom: 2 }} />
      <Grid container spacing={2}>
        {allProducts && allProducts.map((item: Product) => (
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
        ))}
      </Grid>
      <Drawer anchor='right' open={isDrawerOpen} onClose={closeDrawer}>
        <List>
          {cartProduts.map((item: Product) => (
            <ListItem>
            <CardMedia
              component="img"
              alt={item.title}
              style={{ width: 100, height: 100, marginRight: 10 }} />
            <ListItemText primary={item.title} secondary={`Price: $${item.price} - Quantity: ${item.quantity}`} />
            <IconButton
              edge="end"
              aria-label="decrease"
              onClick={() => removeOneItemQtd(item.id)}
              className="button_decrease_qtd_item">
              <RemoveCircleOutline />
            </IconButton>
            <IconButton>
              <IconButton
                edge="end"
                aria-label="increase"
                onClick={() => addOneItemQtd(item.id)}
                className='button_increase_tqd_item'>
                <AddCircleOutline />
              </IconButton>
            </IconButton>
          </ListItem>
          ))}
          
          <Divider />
          <ListItem>
            <ListItemText primary={`Total de Itens: ${totalItems}`} />
          </ListItem>
        </List>
      </Drawer>
      <Button
        variant="contained"
        color='primary'
        startIcon={<ShoppingCart />}
        onClick={openDrawer}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        className='cart'>
        Carrinho {totalItems}
      </Button>
    </Container>
  );
}
export default ShoppingProducts;
