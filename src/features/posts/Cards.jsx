import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";

const Cards = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <Container>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={post.title}
                height="140"
                image={`https://via.placeholder.com/140?text=${post.title}`} // Placeholder image
                title={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${post.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {post.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owner: {post.owner}
                </Typography>
                <Button
                  component={Link}
                  to={`/product/${post.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
