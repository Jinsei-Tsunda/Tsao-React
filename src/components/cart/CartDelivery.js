import React from 'react'
import CartDetail from './CartDetail'

function CartDelivery(props) {
  return (
    <>
      <div className="col-8">
        <div className="cart cart-delivery">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">選擇送貨及付款方式</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner">
            <h5>配送方式</h5>
            <div className="radio-wrap d-flex align-items-center">
              <input type="radio" id="home" name="delivery" value="home" />
              <label for="home">宅配</label>
              <input type="radio" id="711" name="delivery" value="711" />
              <label for="711">超商取貨</label>
              <input
                type="button"
                name="store-location"
                value="選擇門市"
                className="btn store-location"
              />
            </div>
            <h5>付款方式</h5>
            <div className="radio-wrap d-flex align-items-center">
              <input type="radio" id="credit" name="payment" value="credit" />
              <label for="credit">信用卡</label>
              <input type="radio" id="linepay" name="payment" value="linepay" />
              <label for="linepay">LINE PAY</label>
              <input type="radio" id="711pay" name="payment" value="711pay" />
              <label for="711pay">超商取貨付款</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CartDelivery
