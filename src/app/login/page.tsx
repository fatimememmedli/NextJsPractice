"use client";
import { useRouter } from "next/navigation";

import React from "react";

type Props = {};

function page({}: Props) {
  const router = useRouter();
  return (
    <div style={{ display: "flex" }}>
      <input type="text" />
      <input type="text" />
      <button
        onClick={() => {
          router.push("./products");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default page;
