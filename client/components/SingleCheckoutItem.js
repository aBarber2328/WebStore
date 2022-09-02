import React from "react";

const SingleCheckoutItem = ({ product }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between lh-sm "
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ minWidth: "100px" }}>
        <h6 className="my-0">{product.name}</h6>
        <small className="text-muted">{product.description}</small>
      </div>
      <span
        className="text-muted"
        style={{
          minWidth: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        X {product.quantity}
      </span>
      <span
        className="text-muted"
        style={{
          minWidth: "100px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        $ {product.price}
      </span>
    </li>
  );
};

export default SingleCheckoutItem;
