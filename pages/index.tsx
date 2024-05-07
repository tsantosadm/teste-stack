import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material'

const Home = () => {
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
    </Container>
  );
}
export default Home;
