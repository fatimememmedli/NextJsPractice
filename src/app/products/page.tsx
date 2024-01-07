"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { products } from "./../util/db";
type Props = {};
interface product {
  name: string;
  id: string;
}
console.log(products);
function page({}: Props) {
  const router = useRouter();

  return (
    <div style={{ margin: "0 auto" }}>
      <h1>products</h1>
      <div>
        <ul>
          {products &&
            products.map((elem: product) => {
              return (
                <li>
                  {elem.name}{" "}
                  <button
                    onClick={() => {
                      router.push(`/products/${elem.id}`);
                    }}
                  >
                    detail
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default page;
