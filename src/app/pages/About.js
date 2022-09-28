import { Grid, Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import image1 from "../components/images/about-1.jpg";
import image2 from "../components/images/about-2.jpg";

const About = () => {
  return (
    <Container sx={{ mt: 16 }}>
      <Box sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              alt=""
              src={image2}
              display={{ xs: "none", md: "block" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginX: 4, marginY: 8 }}>
              <Typography gutterBottom component="div" sx={{ fontSize: 20 }}>
                <h1>
                  Welcome to the <span style={{ color: "red" }}>fake</span>{" "}
                  store!
                </h1>
              </Typography>

              <p>
                Here you can buy all the imaginary stuff you want, and pay for
                it with money. We have a wide selection of imaginary products
                for you to choose from, and our friendly{" "}
                <span style={{ color: "red" }}>fake</span> staff are always on
                hand to help you find what you need. So come on in and happy{" "}
                <span style={{ color: "red" }}>fake</span> shopping!
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginX: 4, marginY: 8 }}>
              <Typography gutterBottom component="div" sx={{ fontSize: 20 }}>
                <h3>
                  If you're looking for the best{" "}
                  <span style={{ color: "red" }}>fake</span> prices
                </h3>
              </Typography>

              <p>
                You've come to the right place. At our store, we pride ourselves
                on offering the lowest{" "}
                <span style={{ color: "red" }}>fake</span> prices on top-quality
                fake products. Whether you're looking for a{" "}
                <span style={{ color: "red" }}>fake</span> diamond ring or a{" "}
                <span style={{ color: "red" }}>fake</span> Rolex watch, we have
                what you're looking for at prices that can't be beat. So come on
                in and take a look around. We're sure you'll find something
                that's just perfect for you. to the fake store! Here you can buy
                all the imaginary stuff you want, and pay for it with{" "}
                <span style={{ color: "red" }}>fake</span> money. We have a wide
                selection of imaginary products for you to choose from, and our
                friendly <span style={{ color: "red" }}>fake</span> staff are
                always on hand to help you find what you need. So come on in and
                start shopping!
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              alt="The house from the offer."
              src={image1}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
