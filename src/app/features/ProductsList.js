import { useSelector, useDispatch } from "react-redux";
import {
  selectAllProducts as selectAllProducts,
  getProductsStatus as getProductsStatus,
  getProductsError as getProductsError,
  fetchProducts as fetchProducts,
} from "./productsSlice";
import { useEffect, useState } from "react";
import ProductsExcerpt from "./ProductsExcerpt";
import { Pagination, Box, Container, Grid } from "@mui/material";
import hero1 from "../components/images/hero1.jpg";
import usePagination from "../components/pagination";

const ProductsList = () => {
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const dispatch = useDispatch();

  const pageCount = Math.ceil(products.length / PER_PAGE);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;
  if (productStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (productStatus === "succeeded") {
    content = (
      <>
        {_DATA.currentData().map((v) => {
          return <ProductsExcerpt key={v.id} product={v} />;
        })}
      </>
    );
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <Container sx={{ mt: 12 }}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{ position: "absolute", top: 50, left: 50 }}
          display={{ xs: "none", md: "block" }}
        >
          <h1 style={{ fontSize: "50px" }}>
            {" "}
            Fake{" "}
            <span style={{ color: "red", position: "absolute", top: 50 }}>
              Store
            </span>
          </h1>
        </Box>

        <Box
          component="img"
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          alt=""
          src={hero1}
          display={{ xs: "none", md: "block" }}
        />
      </Box>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        sx={{ mt: 4 }}
      />
      <Grid container mt={1} mb={4} spacing={3}>
        {content}
      </Grid>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Container>
  );
};
export default ProductsList;
