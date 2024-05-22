import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const ProductDetail = () => {
  const { productId } = useParams();
  const posts = useSelector(selectAllPosts);
  const product = posts.find((post) => post.id === productId);

  if (!product) {
    return (
      <Container>
        <Typography variant="h6">Product not found</Typography>
      </Container>
    );
  }

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h6">Price: ${product.price}</Typography>
            <Typography variant="body1" paragraph>
              Type: {product.type}
            </Typography>
            <Typography variant="body1">Owner: {product.owner}</Typography>
          </Box>
          <Button variant="contained" color="primary" onClick={handleCheckout}>
            Go to Checkout
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetail;
