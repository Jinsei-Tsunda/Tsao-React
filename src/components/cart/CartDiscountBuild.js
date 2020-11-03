import React from 'react'

function CartDiscount(props) {
  return (
    <>
      <tr className="table-text">
        <td>
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
