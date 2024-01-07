import React from "react";
import { products } from "./../../util/db";
type Props = {
  params: {
    id: string;
  };
};
interface Product {
  name: string;
  id: string;
}
function page({ params }: Props) {
  console.log(params.id);
  let productDetail: { name: string; id: string } = products.find(
    (elem) => elem.id == params.id
  );
  console.log(productDetail);
  return (
    <div>
      <h1>detail {productDetail.name}</h1>
      <p>{productDetail.id}</p>
    </div>
  );
}

export default page;
