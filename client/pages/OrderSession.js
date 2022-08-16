import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import OrderSessionProduct from "../components/OrderSessionProduct";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OrderSession = () => {
  const [cart, setCart] = useState([]);
  const cartRef = useRef([]);
  const [total, setTotal] = useState(0);

  const updateOrderSession = async () => {
    const newCart = cartRef.current.map((item) => ({
      quantity: item.productOrderSessions.quantity,
      orderSessionId: item.productOrderSessions.orderSessionId,
      productId: item.productOrderSessions.productId,
    }));

    await axios.put("/api/order-session/", {
      token: window.localStorage.token,
      cart: newCart,
    });
  };

  useEffect(() => {
    (async () => {
      const token = window.localStorage.token;
      const { data } = await axios.get("/api/order-session", {
        headers: {
          authorization: token,
        },
      });
      setCart(data.products);
      cartRef.current = data.products;
      console.log(data.products);
    })();
    return updateOrderSession;
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(cart));
  }, [cart]);

  return (
    <div className="order-session">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        ""
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price&nbsp;($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carts.map((product) => (
                <>
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <OrderSessionProduct
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                        cartRef={cartRef}
                      />
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <strong>
        <p className="session-total">${total}</p>
      </strong>
      <Link to="/checkout">
        <Button>Checkout</Button>
      </Link>
    </div>
  );
};

const calculateTotal = (cart) => {
  return cart.reduce(
    (total, item) => total + item.price * item.productOrderSessions.quantity,
    0
  );
};

export default OrderSession;
