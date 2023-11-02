"use client";
import React from "react";
import { StoreList } from "@/app/shop/page";
import Image from "next/image";

interface StoreListProps {
  products: StoreList[];
}

export default function StoreList(props: StoreListProps) {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <li key={product.sectionTitle}>
            <h2>{product.sectionTitle}</h2>
            <ul>
              {product.sectionItems.map((item) => {
                return (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={200}
                      height={200}
                    />
                    <p>{item.tag}</p>
                    <p>{item.keywords.join(", ")}</p>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
