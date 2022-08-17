import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button,Badge } from "reactstrap";
import {useGetProductsByIdQuery } from "../../services/api";
import { addToCart } from "../../slices/cartSlice";
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from './counterSlice'

export function ProductList() {
  const categoryInfo = useSelector((state) => state.category.categoryInfo); // bu state degıstıkce bu fonk hep renderlancak
  let { data, error, isLoading } = useGetProductsByIdQuery(categoryInfo.id);
  const dispatch = useDispatch();
  const [productListTitle] = useState("Products");
  console.log("bu sefer calıstı");
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
           <Badge
                color="success"
                pill
              >
                {productListTitle}
              </Badge>
              <Badge
                color="warning"
                pill
              >
                {categoryInfo.name}
              </Badge>
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>categoryId</th>
                <th>productName</th>
                <th>quantityPerUnit</th>
                <th>unitPrice</th>
                <th>unitsInStock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                    <Button
                      onClick={() => dispatch(addToCart(product))}
                      color="success"
                      outline
                    >
                      add
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}
