import React, { useState } from "react";
import MainHead from "./navbar";
import Products from "./products";

function Places() {
  const [product, setProduct] = useState("pro1");
  return (
    <div className="place">
      <MainHead setProduct={setProduct} product={product} />
      <Products setProduct={setProduct} product={product} />
    </div>
  );
}

export default Places;
