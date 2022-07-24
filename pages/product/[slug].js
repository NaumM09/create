import React from "react";
import { useRouter } from "next/router";

const ProductScreen = () => {
  const routr = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>ProductScreen</div>;
  }
  return (
    <>
      <div>Hello world!</div>
    </>
  );
};

export default ProductScreen;
