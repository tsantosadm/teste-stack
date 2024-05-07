import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline, ShoppingCart } from '@mui/icons-material'

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <Card>
          <CardContent>
            <CardMedia
              component="img"
              alt="green iguana"
            />
            <Typography>Titulo</Typography>
            <Typography>Price: $ Preço</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => alert}>Adicionar ao Carrinho</Button>
          </CardActions>
        </Card>
      </Grid>
      <Drawer anchor='right' open={isDrawerOpen} onClose={closeDrawer}>
        <List>
          <ListItem>
            <CardMedia
              component="img"
              alt={"img"}
              style={{ width: 100, height: 100, marginRight: 10 }} />
            <ListItemText primary={"Titulo"} secondary={`Price: $${"Price"} - Quantity: ${"100,00"}`} />
            <IconButton
              edge="end"
              aria-label="decrease"
              onClick={() => alert}
              className="button_decrease_qtd_item">
              <RemoveCircleOutline />
            </IconButton>
            <IconButton>
              <IconButton
                edge="end"
                aria-label="increase"
                onClick={() => alert}
                className='button_increase_tqd_item'>
                <AddCircleOutline />
              </IconButton>
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={"Total Items"} />
          </ListItem>
        </List>
      </Drawer>
      <Button
        variant="contained"
        color='primary'
        startIcon={<ShoppingCart />}
        onClick={openDrawer}
        sx={{position: "fixed", bottom: 16, right: 16}}
        className='cart'>
        Carrinho
      </Button>
    </Container>
  );
}
export default Home;
