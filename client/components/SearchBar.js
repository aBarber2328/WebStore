import React, { useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { fetchProducts, searchProducts } from "../store/products";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = (props) => {
  let products = useSelector((state) => state.products);
  //console.log("products",products);

  const handleSearch = (event) => {
    let input = event.target.value.toUpperCase();
    let previous = input.length;
      console.log("input", previous);

      if(input){
        if(input.length >= previous){
          props.productSearch(input);
        }
        if(input.length < previous){
          props.getProducts();
          props.productSearch(input);
          console.log(props);
        }
      }

  };

  // const searchFilter = createSelectorHook(
  //   (allProducts)=> allProducts.filter((product)=>{

  //       let matchProduct = product.name.toUpperCase();

  //       if (matchProduct.indexOf(handleSearch) > -1) {
  //          console.log(matchProduct);
  //          return matchProduct = '';
  //       } else {
  //         matchProduct = "none";
  //       }

  //   })
  // );
  // const FilterSearch = ()=>{
  //   const searchFil = useSelector(searchFilter);
  //   console.log(searchFil);
  //   return (
  //     <div>{searchFil}</div>
  //   )
  // };
  //console.log(handleSearch);

  return (
    // <div>
    // {allProducts.length === undefined ? "":

    // <Stack spacing={2} sx={{ width: 300 }}>
    //   <Autocomplete
    //     freeSolo
    //     id="free-solo-2-demo"
    //     disableClearable
    //     options={allProducts.map((product) => product.name)}
    //     renderInput={(params) => (
    //       <TextField
    //         key={allProducts.map((product) => product.id)}
    //         {...params}
    //         label="Search"
    //         InputProps={{
    //           ...params.InputProps,
    //           type: 'search',
    //         }}
    //       />
    //     )}
    //   />
    // </Stack>}
    // </div>
    <Search>
      <SearchIconWrapper>
        {/* <IconButton  type="submit" onSubmit={handleSubmit}> */}
        <SearchIcon />
        {/* </IconButton> */}
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          handleSearch(e);
        }}
      />
    </Search>
  );
};

const mapDispatch = (dispatch) => {
  return {
    productSearch: (product) => {
      dispatch(searchProducts(product));
    },
    getProducts: ()=>{
      dispatch(fetchProducts());
    }
  };
};

export default connect(null, mapDispatch)(SearchBar);
