import React from 'react'

function CartDiscount(props) {
  return (
    <>
      <tr className="table-text">
        <td>
          <label for="discount-code">優惠代碼：</label>
          <input
            id="discount-code"
            name="discount-code"
            className="discount-code"
            type="text"
          />
          <br />
          已享用之優惠
          <br />
          <div className="discount-box">
            <span>優惠促銷</span>
          </div>
          &ensp;<span>全站滿 600 元，即享免運優惠</span>
        </td>
      </tr>
    </>
  )
}

export default CartDiscount
