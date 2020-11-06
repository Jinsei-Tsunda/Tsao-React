import React from 'react'

function CartDetailEmpty(props) {
  return (
    <>
      <tr>
        <td
          colspan="6"
          className="d-flex justify-content-center text-align-center"
        >
          購物車內尚無商品
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  )
}
export default CartDetailEmpty
