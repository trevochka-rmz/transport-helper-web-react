import "./BillBalanceModal.css";
import {notifySuccess, notifyError} from "../utils/notification.js"
import {useState} from "react"

function BillBalanceModal({ user , setUser , onClose }) {
  const [userBalance, setUserBalance] = useState(100)

  function handleSubmit(){
        setUser({...user, balance:user.balance+parseInt(userBalance)})
        notifySuccess("Баланс успешно пополнен!")
        onClose()     
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setUserBalance( value )
}


  return (
    <div className="BillBalanceModal">
      <form onSubmit={handleSubmit} className="balance-form">
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          &times;
        </button>

        <h1>Пополнение баланса</h1>
        <h2>Выбор способа оплаты</h2>

        <div className="payment-methods">
          <div className="bank-options">
            <input
              type="radio"
              id="askTbank"
              name="bank"
              value="Tbank"
              defaultChecked
            />
            <label htmlFor="askTbank">Т-банк</label>

            <input
              type="radio"
              id="askAlphabank"
              name="bank"
              value="Alphabank"
            />
            <label htmlFor="askAlphabank">Альфа Банк</label>

            <input
              type="radio"
              id="askVTBbank"
              name="bank"
              value="VTBbank"
            />
            <label htmlFor="askVTBbank">ВТБ банк</label>

            <input
              type="radio"
              id="Qivibank"
              name="bank"
              value="Qivibank"
            />
            <label htmlFor="Qivibank">Киви банк</label>
          </div>

          <div className="amount-section">
            <label htmlFor="inputBalance">Сумма пополнения:</label>
            <input
              type="number"
              id="inputBalance"
              name="inputBalance"
              value={userBalance}
              onChange={handleChange}
            />
          </div>
          <button className="submit-button" type="submit">Пополнить баланс</button>
        </div>
      </form>
    </div>
  );
}

export default BillBalanceModal;