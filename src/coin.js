import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
  });
}, []); // 로딩 직후 1회만 코드 실행
  const [budget, setBudget] = useState("");
  const [amount, setAmount] = useState("");
  const onChange = (event) => {
    setBudget(event.target.value);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    setAmount(budget);
    setBudget("");
  }

  const selectCoin = () => {
    console.log("coin changed!");
  }

return(
  <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? (<strong>Loading...</strong>
    ) : (
      <div>
        <form onSubmit={onSubmit}>
          <input value={budget} onChange={onChange} placeholder='BUDGET / USD'></input>
        </form>
        <select onChange={selectCoin}>
          {coins.map((coin) =>
            <option key={coin.id}>
              {coin.name} ({coin.symbol}:{coin.quotes.USD.price} USD)
            </option>)}
        </select>
        <h2>You can buy <span>{amount}</span></h2>
      </div>
    )}
  </div>
  )
};

export default App;
// 소지금액 input으로 만들어 환전하기