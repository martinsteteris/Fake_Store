import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Modal,
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
} from "@mui/material";

const ProductsExcerpt = ({ product: product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: {xs: 550, md: 450}, 
          height: "100%",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          position: "relative",
        }}
      >
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            // minHeight="150px"
            image={product.image}
            alt={product.title}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom component="div" sx={{ fontSize: 20 }}>
              {product.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
              minWidth: 450,
              maxWidth: 550,
            }}
          >
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 233, md: 300 },
                maxWidth: { xs: 400, md: 450 },
              }}
              alt="The house from the offer."
              src={product.image}
            />
            <Typography id="modal-modal-title" variant="h6" component="h3">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt="3">
              {product.description}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{ fontSize: 18, marginTop: 2 }}
            >
              {"Price: " + product.price.toFixed(2) + " $"}
            </Typography>
            <Button size="small" color="primary">
              Add to cart
            </Button>
          </Box>
        </Modal>
        <CardActions>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: 18, position: "absolute", bottom: 5, left: 8 }}
          >
            {product.price.toFixed(2) + " $"}
          </Typography>

          <div style={{ position: "absolute", bottom: 5, right: 5 }}>
            <Button size="small" color="primary" onClick={handleOpen}>
              View
            </Button>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProductsExcerpt;
