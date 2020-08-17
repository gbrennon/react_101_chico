import React from 'react';

export type Product = {
  id: number,
  name: string,
  price: number
}

type ProductListProps = { products: Product[] };

export default function ProductList(props: ProductListProps) {
  return (
    <ul>
      {props.products.map(product => <li>{product.name}</li>)}
    </ul>
  )
};
