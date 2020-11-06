import React, { useState } from 'react'

function CartDetail(props) {
  const [amount, setAmount] = useState(1)

  return (
    <>
      <tr>
        <td>
          <img src="" alt="" />
          &emsp;<span>順其自然晚霜</span>
        </td>
        <td>
          <span>無</span>
        </td>
        <td>
          <span>NT$ 500</span>
        </td>
        <td className="amount">
          <img
            className="icon"
            src="./images/remove_circle_outline.svg"
            alt=""
          />
          &ensp;
          <div className="amount-box">
            <span>1</span>
          </div>
          &ensp;
          <img className="icon" src="./images/add_circle_outline.svg" alt="" />
        </td>
        <td>
          <span>NT$ 500</span>
        </td>
        <td>
          <button type="button" className="btn del-btn">
            刪除
          </button>
        </td>
      </tr>
    </>
  )
}
export default CartDetail
