import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to MyApp
            </Typography>
            <Typography variant="body1" paragraph>
              Discover our amazing range of products, designed to bring you the
              best quality at unbeatable prices. From cutting-edge electronics
              to fashionable apparel, we have something for everyone.
            </Typography>
            <Typography variant="body1" paragraph>
              Our commitment to excellence ensures that you always get the best
              value for your money. Explore our categories and find your perfect
              match today!
            </Typography>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              View Products
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                borderRadius: "8px",
              }}
              alt="Homepage Banner"
              src="https://via.placeholder.com/600x400?text=MyApp+Banner" // Placeholder image
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
