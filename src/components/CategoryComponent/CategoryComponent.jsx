import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

export default function CategoryComponent({
  limit,
  category
}) {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios(
      limit
      ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
      : `https://fakestoreapi.com/products/category/${category}`
    )
    .then(({data})=> setProducts(data));
  }, [])
  return (
    <div className="category-component">
      <div className="container">

          <h1>{category}</h1>

          <div className="row">
              {
                products.map(item=>{
                  return <div key={item.id} className="col-3">
                      <Card item={item} />
                  </div>
                })
              }
          </div>

      </div>
    </div>
  )
}
