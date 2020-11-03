import React from 'react'

function CartDetail(props) {
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
      </tr>
    </>
  )
}
export default CartDetail
