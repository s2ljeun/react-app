import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => { //익명의 함수
    console.log("CALL THE API");
  }, []);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

// useEffect()
// 특정 코드가 단 한번만 실행될 수 있게 보호하는 역할(state가 변경되어도)

// state prop effect
// * create-react-app을 사용하기 때문에
// import { useState, useEffect } from "react";
// React.useState() -> useState()


// const [keyword, setKeyword] = useState("");
// const onChange = (event) => setKeyword(event.target.value); //event 타겟의 value를 받아 setKeyword에 넣음

// <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />

// onChange event 감지 -> Function onChange 실행 -> setKeyword() 실행 -> input value에 넣음