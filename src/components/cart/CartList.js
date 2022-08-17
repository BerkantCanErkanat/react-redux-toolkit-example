import React from 'react'
import {Table,Button} from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart } from '../../slices/cartSlice';
// import { useParams} from 'react-router-dom';

export function CartList() {
const cart = useSelector((state) => state.cart.cart);
const dispatch = useDispatch()
// let { id } = useParams(); // bunla anlıcaz hangi productIdsinden geliyoruz
// console.log(id);

return (
  <div>
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>categoryId</th>
          <th>productName</th>
          <th>quantityPerUnit</th>
          <th>unitPrice</th>
          <th>unitsInStock</th>
          <th>unitsInCart</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem,index) => (
          <tr key={cartItem.product.id}>
            <td>{cartItem.product.id}</td>
            <td>{cartItem.product.categoryId}</td>
            <td>{cartItem.product.productName}</td>
            <td>{cartItem.product.quantityPerUnit}</td>
            <td>{cartItem.product.unitPrice}</td>
            <td>{cartItem.product.unitsInStock}</td>
            <td>{cartItem.count}</td>
            <td>
            <Button color="danger" pill onClick={()=>dispatch(removeFromCart(index))}>Remove</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
}