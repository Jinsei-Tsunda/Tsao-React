import React, { useState } from 'react'

function CartCreditCard(props) {
  return (
    <>
      <div className="col-5">
        <div className="cart cart-info">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">信用卡資訊</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner">
            <label for="" className="mb-3">
              卡號：
            </label>
            <input type="text" className="credit-num mr-1 mb-3" />
            &ndash;
            <input type="text" className="credit-num mr-1 mb-3" />
            &ndash;
            <input type="text" className="credit-num mr-1 mb-3" />
            &ndash;
            <input type="text" className="credit-num mb-3" />
            <br />
            <label for="" className="">
              到期日：
            </label>
            <input type="text" className="credit-num mr-1 mb-3" />
            &frasl;
            <input type="text" className="credit-num mr-1 mb-3" />
            <label for="" className="">
              安全碼：
            </label>
            <input type="text" className="credit-num mr-1 mb-3" />
            <br />
            <label for="" className="mb-3">
              持卡人姓名：
            </label>
            <input type="text" className="credit-name" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCreditCard
