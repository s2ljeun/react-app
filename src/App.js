import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => { //익명의 함수
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length >5) { //컴포넌트가 처음 로딩될 때는 실행 X
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]); //[]안의 state가 변화할 때만 코드 실행, counter 변화할 때 X

  useEffect(() => {
    if (counter !== 0) {
      console.log("I run when 'counter' changes.");
    }
  }, [counter]);

  useEffect(() => {
    if (counter !== 0 && keyword !== "") {
      console.log("I run when 'counter' & 'keyword' changes.");
    }
  }, [counter, keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;