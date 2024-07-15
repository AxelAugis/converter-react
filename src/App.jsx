import styles from './App.module.css'

function App() {

  const currencies = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.72,
    YEN: 110.33,
  }
  
  const convert = () => {
    const amount = document.getElementById('amount').value
    const fromCurrency = document.getElementById('fromCurrency').value
    const toCurrency = document.getElementById('toCurrency').value
    const result = amount * (currencies[toCurrency] / currencies[fromCurrency])
    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`
  }

  return (
    <div className={`${styles.wrapper}`}>
      <div id="converter" className={`${styles.converter}`}>
        <input type="number" id="amount" className={`${styles.inputNumber}`} placeholder="Entrez un montant" />
        <div className={`${styles.selectWrapper}`}>
          <select id="fromCurrency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="YEN">YEN</option>
          </select>
          <select id="toCurrency">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="YEN">YEN</option>
          </select>
        </div>
        <button onClick={convert} className={`${styles.btnConverter}`} >Convertir</button>
        <div id="result"></div>
      </div>
    </div>
  )
}

export default App
