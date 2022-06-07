import { useState, useEffect } from "react";

function Hello(){
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("Bye :(");
  }, [])
   // Cleanup fn: component가 destroy될 때, useEffect가 return한 함수를 실행해 준다
  return <h1>Hello</h1>;
} // 컴포넌트는 jsx를 return하는 function일 뿐

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;