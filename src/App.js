import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //투두가 비어있다면 함수 작동 X
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // currentArray의 모든 요소를 불러온다 - array 안에 array를 추가하는 대신
    setToDo("");
  };

return (
  <div>
    <h1>할 일({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder='할 일을 입력하세요.'
      />
      <button>할 일 추가</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
  )
}

export default App;